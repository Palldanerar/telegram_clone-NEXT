import Sidebar from '../Components/Sidebar/Sidebar'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto flex'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default page