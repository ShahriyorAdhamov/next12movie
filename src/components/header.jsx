import Image from 'next/image'
import React from 'react'
import {HomeIcon, PhoneIcon, InformationCircleIcon, UserIcon} from '@heroicons/react/20/solid'
import HeaderIcon from './header-icon'

function Header() {
  return (
    <div>
        <div>
            <HeaderIcon title='HOME' Icon={HomeIcon}/>
            <HeaderIcon title='ACCOUNT' Icon={UserIcon}/>
            <HeaderIcon title='CONTACT' Icon={PhoneIcon}/>\
            <HeaderIcon title='ABOUT' Icon={InformationCircleIcon}/>
        </div>
        <Image 
            src="https://www.shutterstock.com/image-vector/imdb-logo-vector-editorial-transparent-260nw-2339988595.jpg"
            width="200"
            height="200"
        />
    </div>
  )
}

export default Header