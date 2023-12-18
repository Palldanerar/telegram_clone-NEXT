"use client"

import { PhoneIcon } from '@/app/Utils/icons';
import { useRouter } from 'next/navigation'
import React from 'react';

function CallBtn() {
  const router = useRouter();

  function handleClick() {
    router.push("/chat/room");
  }


  return (
      <button onClick={handleClick}>
          <PhoneIcon/>
    </button>
  )
}

export default CallBtn