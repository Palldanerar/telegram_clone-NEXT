import Messages from '../Components/Chat-Threads/Messages'
import Sidebar from '../Components/Sidebar/Sidebar'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto flex'>
        <Sidebar/>
        <Messages />
      </div>
    </div>
  )
}

export default page