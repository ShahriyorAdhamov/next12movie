import Image from 'next/image'
import React from 'react'
// import HeaderIcon from './header-icon'
// import {HomeIcon, PhoneIcon, InformationCircleIcon, UserIcon} from '@heroicons/react/24/solid'

function Header() {
  return (
    <div className='flex flex-col items-center text bg-gray-700 text-gray-200 p-6 sm:flex-row justify-between select-none'>
        <div className='flex'>
            {/* <HeaderIcon title='HOME' Icon={HomeIcon}/>
            <HeaderIcon title='ACCOUNT' Icon={UserIcon}/>
            <HeaderIcon title='CONTACT' Icon={PhoneIcon}/>
            <HeaderIcon title='ABOUT' Icon={InformationCircleIcon}/> */}
        </div>
        <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            width={200}
            height={100}
            className='cursor-pointer'
        />
    </div>
  )
}

export default Header