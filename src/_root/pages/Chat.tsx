
import React, { useEffect, useRef, useState } from 'react';
import ChatForm from '../../components/forms/ChatForm';
import ChatMessages from './ChatMessages';

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [atBottom, setAtBottom] = useState(true); // State to track if user is at the bottom
  const messagesEndRef = useRef(null);

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== 'Thinking...'),
        { role: 'model', text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    };
    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC-bUxVoyBBUzhpDIDLZLO3QFwssQhwkd4',
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || 'Error');
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const offset = 50; // Adjust this to account for the height of the search tab or padding
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      window.scrollBy(0, offset); // Scroll further down to ensure the content is fully visible
    }
  };

  const handleScroll = () => {
    const chatContainer = document.querySelector('.flex-1.overflow-y-auto');
    if (chatContainer) {
      const isAtBottom =
        chatContainer.scrollHeight - chatContainer.scrollTop === chatContainer.clientHeight;
      setAtBottom(isAtBottom);
    }
  };

  useEffect(() => {
    scrollToBottom(); // Automatically scroll when chatHistory updates
  }, [chatHistory]);

  useEffect(() => {
    const chatContainer = document.querySelector('.flex-1.overflow-y-auto');
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      return () => chatContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-1 w-full gap-2">
      <div className="common-container relative flex flex-col h-full">
        <h2 className="h3-bold md:h2-bold text-left w-full">ChatBot</h2>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto pb-24">
          {chatHistory.map((chat, index) => (
            <ChatMessages key={index} chat={chat} />
          ))}
          <div ref={messagesEndRef} /> {/* Scroll reference */}
        </div>

        {/* Scroll to Bottom Button */}
        <button
          className={`fixed bottom-20 left-0 right-1/2 mx-auto w-10 h-10 ${
            atBottom ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-light-3'
          } text-white rounded-full flex justify-center items-center shadow-lg`}
          onClick={scrollToBottom}
          disabled={atBottom}
          aria-label="Scroll to Bottom"
        >
          <span className="text-xl">&#8595;</span> {/* Down Arrow Symbol */}
        </button>

        {/* ChatForm fixed at the bottom, full width with space on left and right */}
        <div className="fixed bottom-4 left-1/4 right-1/4 mx-auto w-full max-w-screen-lg px-6 sm:px-8 md:px-12 lg:px-16">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
