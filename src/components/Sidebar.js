import { SideNavigation } from '@cloudscape-design/components'
import React from 'react'

const Sidebar = () => {
  return (
    <>
   

    <SideNavigation
      header={{
        href: '#',
        text: 'Service name',
      }}
      items={[
        { type: "link", text: "DashBoard",  href: "#/page1" },
        { type: "link", text: "Search", href: "/search" },
        { type: "link", text: "Admin Actions", href: "#/page2" },
            
        {
          type: "section",
          text: "Expences",
          items: [
            {
              type: "link",
              text: "Add Petty Cash",
              href: "#/page4"
            },
            {
              type: "link",
              text: "Add Expencess",
              href: "#/page5"
            },
            
          ]
        },
        
  {
    type: "section",
    text: "Configrations",
    items: [
      {
        type: "link",
        text: "Programs",
        href: "#/Programs"
      },
      {
        type: "Bank",
        text: "Page 8",
        href: "#/Bank"
      },
      {
        type: "link",
        text: "Industries",
        href: "#/page9"
      },
      {
        type: "link",
        text: "Ocupations",
        href: "#/page9"
      },
      {
        type: "link",
        text: "Beneficiary Types",
        href: "#/page9"
      }
      ,
      {
        type: "link",
        text: "Beneficiary Occupations",
        href: "#/page9"
      }
    ]
  },
  {
    type: "section",
    text: "Applications",
    items: [
      {
        type: "link",
        text: "ESP Applications",
        href: "#/Programs"
      },
      {
        type: "link",
        text: "HSP Applications",
        href: "#/Programs"
      },
      {
        type: "link",
        text: "WSP Applications",
        href: "#/Programs"
      },
      {
        type: "link",
        text: "EDP Applications",
        href: "#/Programs"
      },
     
    ]
    
  } ,
  { type: "link", text: "NGO's",  href: "#/page1" },
  { type: "link", text: "Volunteers",  href: "#/page1" },
  { type: "link", text: "BEneficiary",  href: "#/page1" },
  { type: "link", text: "Donations",  href: "#/page1" },
  { type: "link", text: "Historic Applications",  href: "#/page1" },       
      
      ]}
    />
  

</>
  )
}

export default Sidebar