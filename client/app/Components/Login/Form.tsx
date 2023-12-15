"use client"

import React, { useState } from 'react'
import Avatar from './Avatar'

const Form = () => {

  const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed());

  return (
    <div className='flex flex-col gap-5'>
      <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
      <div className='flex flex-col xl:flex-row gap-5'>
        <div className='form-control w-full'>
          <label className='label'><span className='label-text text-lg'>What is your name?</span></label>
          <input type="text" placeholder='Username' className='input input-bordered w-full' required />
        </div>
        <div className='form-control w-full'>
          <label className='label'><span className='label-text text-lg'>Put your email.</span></label>
          <input type="email" placeholder='Email' className='input input-bordered w-full' required />
        </div>
      </div>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Form