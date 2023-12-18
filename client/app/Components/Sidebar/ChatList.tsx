"use client"

import { fetchUsers } from '@/app/lib/fetchers';
import { useAllUsers } from '@/app/store/userStore';
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow';
import ChatItem from './ChatItem';
import { io } from "socket.io-client"

interface userProps {
    _id: string | undefined;
    imageId: string | undefined;
    name: string | undefined;
    email: string | undefined;
    messages: any[];
}

function ChatList({ mySelf }: { mySelf: userProps }) {
    const { users, setUsers } = useAllUsers(
        (state: any) => ({ users: state.users, setUsers: state.setUsers }),
        shallow
    );
    const socket = io("http://localhost:8080");
    useEffect(() => {
        socket.on("new-user", () => {
            fetchUsers(mySelf, setUsers)
        })
    }, [])

    useEffect(() => {
        fetchUsers(mySelf, setUsers);
    }, [])
    return (
        <ul className='my-5 flex flex-col'>
            {
                users ? (
                    users?.reverse()?.map((user: any) => <ChatItem key={user._id} user={user} />)

                ) : (
                    <span className='loading loading-ring w-16'></span>
                )
            }
        </ul>
    )
}

export default ChatList