import React from 'react'

import {
  AppLayout,
  BreadcrumbGroup,
  Button,
  ButtonDropdown,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  SpaceBetween,
  SplitPanel,
} from '@cloudscape-design/components';

const TQHeader = () => {
  return (
    <div className='bg-[#192534] justify-between pl-6 pr-6 items-center flex w-[100%] mb-1 h-[50px]'>
<h2 className='text-[#fff]'>Quran Foundation</h2>
  
{/* header buttons */}
  <div>
  <ButtonDropdown variant='normal'
      items={[
        { text: "Apply ESP Application",  id: "esp", iconName:'add-plus', disabled: false },
   
        { text: "Apply HSP Application", id: "hsp",iconName:'add-plus', disabled: false },
        
        { text: "Apply WSP Application", id: "wsp", iconName:'add-plus', disabled: false },

        { text: "Apply EDP Application", id: "edp", iconName:'add-plus',disabled: false },
      ]}
    >
    New Application
    </ButtonDropdown>

    <ButtonDropdown variant='icon'  
      items={[
        { text: "Login Another acc", id: "mv", disabled: false },
        { text: "Logout", id: "rm", disabled: false },
      
      ]}
    >
    New Application
    </ButtonDropdown>

  </div>
    </div>

  )
}

export default TQHeader