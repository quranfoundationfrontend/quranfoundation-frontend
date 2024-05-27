"use client"
import { Button, ButtonDropdown, SpaceBetween } from '@cloudscape-design/components'
import React from 'react'
import { FaBell, FaMoon, FaPlus, FaSignOutAlt, FaTimes } from 'react-icons/fa';
const Header = () => {
  return (
    <div className='bg-blue-950 h-[100px] flex justify-between pl-9 p-3 pr-9'>
      
<h2 className='text-[#FFF] font-bold'>Quran Foundation</h2>

{/* icon div */}
<div className='flex gap-[1rem]'>

<ButtonDropdown 
      items={[
        { id: "start", text: "Start" },
        { id: "stop", text: "Stop",  },
        {
          id: "hibernate",
          text: "Hibernate",
        },
        { id: "reboot", text: "Reboot", disabled: false },
        { id: "terminate", text: "Terminate" }
      ]}
      ariaLabel="Control instance"
      variant="inline-icon"
    />

<FaMoon color='#fff' size={17}/>
<FaPlus color='#fff' className='cursor-pointer' size={17} />
<div><FaBell color='#fff' size={17} className='cursor-pointer'/> </div>

<FaSignOutAlt color='#fff' size={17} className='cursor-pointer' />

</div>
    
    </div>
  )
}

export default Header