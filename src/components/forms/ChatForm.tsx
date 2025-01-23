import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Textarea } from "../../components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../../components/ui/input"

const formSchema = z.object({
  user: z.string().min(2, {
    message: " ",
  }),
})

const Chat = ({chatHistory,setChatHistory, generateBotResponse}) => {
  
  // Initialize form with default values
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: '',  // Ensure a default value is provided for username
    },
  })

  async function onSubmit(data) {
    // Handle form submission here
    if(!data){
      return;
    }
    
    setChatHistory((history) => [...history, {role:"user", text : data.user } ]);
    form.reset(); 
    setTimeout(()=>{ setChatHistory((history) => [...history , {role:"model", text : "Thinking..." } ]);
    generateBotResponse([...chatHistory ,  {role:"user", text : data.user }])
    },600);
}

  return (
    <>

        <Form {...form} className = "  flex flex-col items-center w-full  gap-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col  w-full  gap-4 max-w-5xl">
            <FormField
              control={form.control}
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" className="shad-input w-full" placeholder="Ask something ..." required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4 items-center justify-end ">
            <Button type="submit" className="shad-button_primary whitespace-nowrap">Submit</Button>
            </div>

          </form>
        </Form>


    </>
  )
}

export default Chat
