// import React from 'react';
// import { Textarea } from '../../components/ui/textarea';
// import botIcon from '../../../public/assets/icons/bot.svg'; // Adjust the path as needed
// import userIcon from '../../../public/assets/icons/user.svg'; 

// const ChatMessages = ({ chat }) => {
//   // Ensure chat.text is displayed properly
//   const textContent = typeof chat.text === 'string' ? chat.text : JSON.stringify(chat.text, null, 2);

//   // Determine which icon to show based on role
//   const iconSrc = chat.role === 'user' ? userIcon : botIcon;
//   const iconAlt = chat.role === 'user' ? 'User Icon' : 'Bot Icon';

//   return (
//     <>
//       {/* Conditional Icon and Line */}
//       <div className="flex items-end ">
//         {/* Dashed Line */}
//        <p style={{color:'black'}}>-------------------------------------------------------------------------------------------------------------------------------------</p>
  
//         {/* Icon */}
//         <img 
//           src={iconSrc} 
//           alt={iconAlt} 
//           className={`${chat.role}-icon`} 
//           style={{ width: '40px', height: '40px' }} 
//         />
//       </div>
  
//       {/* Textarea */}
//       <Textarea 
//         value={textContent} 
//         readOnly 
//         className="shad-textarea" 
//         style={{ width: '100%' , height:'auto'}} 
//       />
//     </>
//   );
  
// };

// export default ChatMessages;
import React from 'react';
import { Textarea } from '../../components/ui/textarea';
import botIcon from '../../../public/assets/icons/bot.svg'; // Adjust the path as needed
import userIcon from '../../../public/assets/icons/user.svg'; 

const ChatMessages = ({ chat }) => {
  // Ensure chat.text is displayed properly
  const textContent = typeof chat.text === 'string' ? chat.text : JSON.stringify(chat.text, null, 2);

  // Determine which icon to show based on role
  const iconSrc = chat.role === 'user' ? userIcon : botIcon;
  const iconAlt = chat.role === 'user' ? 'User Icon' : 'Bot Icon';

  // return (
  //   <>
  //     {/* Conditional Icon and Line */}
  //     <div className="flex items-end ">
  //       {/* Dashed Line */}
  //      <p style={{color:'black'}}>-------------------------------------------------------------------------------------------------------------------------------------</p>
  
  //       {/* Icon */}
  //       <img 
  //         src={iconSrc} 
  //         alt={iconAlt} 
  //         className={`${chat.role}-icon`} 
  //         style={{ width: '40px', height: '40px' }} 
  //       />
  //     </div>
  
  //    <p className='bg-background'>{textContent}</p>

  //   </>
  // );
  return (
    <>
      {/* Conditional Icon and Line */}
      <div className="flex items-end mb-4">
        {/* Dashed Line */}
        <p style={{ color: 'black' }}>-------------------------------------------------------------------------------------------------------------------------------------</p>
  
        {/* Icon */}
        <img
          src={iconSrc}
          alt={iconAlt}
          className={`${chat.role}-icon`}
          style={{ width: '40px', height: '40px' }}
        />
      </div>
      <div className="bg-dark-4 p-2 mb-4 rounded-md">
      {/* Message Content with Background and Spacing */}
      <p  style={{ lineHeight: '1.5' }}>
        {textContent}
      </p>
      </div>
  
    </>
  );
  
  
  
};

export default ChatMessages;