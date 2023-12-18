"use client"
import { fetchMessages } from '@/app/lib/fetchers'
import { useMessages, useSelectedUser, useUser } from '@/app/store/userStore'
import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow';
import MessageItem from './MessageItem';

function MessageList() {

    const sender = useUser((state: any) => state.myUser);
    const reciver = useSelectedUser((state: any) => state.selectedUser)
    const { messages, setMessages } = useMessages((state: any) => ({
        messages: state.messages,
        setMessages: state.setMessages
    }), shallow);

    const [parent] = useAutoAnimate();


    useEffect(() => {
        fetchMessages(sender, reciver, setMessages)
    }, [reciver])

    return (
        <div ref={parent} className='w-full mb-10 flex flex-col max-h-[75vh] overflow-auto no-scrollbar'>
            {
                messages ?
                    messages.map((item: any, i: number) => (
                        // Message Item
                        <MessageItem key={i} user={sender.email == item.sender ? true : false} message={item.message} />
                    )) : ""
            }
        </div>
    )
}

export default MessageList