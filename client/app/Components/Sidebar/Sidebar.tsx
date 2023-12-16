"use client"

import React from 'react'
import { useCookies } from 'react-cookie'

const Sidebar = () => {
    const [cookie, setCookie] = useCookies["user"]

    return (
        <div className='w-full md:!block sidebar z-10 border-r-2 border-slate-400  md:w-1/2 lg:w-1/3 p-3 bg-white h-screen'>
        </div>
    )
}

export default Sidebar