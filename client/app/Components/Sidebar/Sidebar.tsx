"use client"

import { fetchUser } from '@/app/lib/fetchers'
import { useUser } from '@/app/store/userStore'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { shallow } from 'zustand/shallow'
import SearchBar from './SearchBar'

const Sidebar = () => {
    const [cookie, setCookie] = useCookies(["user"])
    const { myUser, setUser } = useUser((state) => ({ myUser: state.myUser, setUser: state.setUser }), shallow);

    useEffect(() => {
        fetchUser(cookie, setUser)
        console.log(myUser)
    }, [cookie.user])

    return (
        <div className='w-full md:!block sidebar z-10 border-r-2 border-slate-400  md:w-1/2 lg:w-1/3 p-3 bg-white h-screen'>
            <SearchBar user={myUser} />
        </div>
    )
}

export default Sidebar