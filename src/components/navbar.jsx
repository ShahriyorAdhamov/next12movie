import React from 'react'
import requests from '@/utils/requests'
import { useRouter } from 'next/router'

function Navbar() {
  const router =  useRouter();
  return (
    <div className='flex justify-center bg-gray-500 text-gray-200'>
      {
        Object.entries(requests).map(([key, {title, url}]) => (
          <h2 onClick={() => (router.push(`?genre=${key}`))} key={key} className='m-6 cursor-pointer active:text-red-400 hover:text-white select-none'>{title}</h2>
        ))
      }
    </div>
  )
}

export default Navbar