import React, { useEffect } from 'react'
import { fetchUsers } from '@/app/lib/fetchers';
import { shallow } from 'zustand/shallow';
import { useAllUsers } from '@/app/store/userStore';
import ChatItem from './ChatItem';

interface userProps {
    _id: string | undefined;
    imageId: string | undefined;
    name: string | undefined;
    email: string | undefined;
    messages: any[];
}


const ChatList = ({ mySelf }: { mySelf: userProps }) => {

    const { users, setUsers } = useAllUsers(
        (state: any) => ({ users: state.users, setUsers: state.setUsers }),
        shallow
    );

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