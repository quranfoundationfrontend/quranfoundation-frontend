import { SideNavigation } from '@cloudscape-design/components';
import React from 'react';
import Link from 'next/link';
// Custom Link component to handle Next.js routing
const CustomLink = ({ href, children }) => (
  <Link href={href} passHref>
  {children}
  </Link>
);

const Sidebar = () => {
  const items = [
    { type: 'link', text: 'Dashboard', href: '/dashboard'  },
    { type: 'link', text: 'Search', href: '/search' },
    { type: 'link', text: 'Admin Actions', href: '/admin-actions' },
    { type: 'link', text: 'Add Event', href: '/add-events' },

    {
      type: 'section',
      text: 'Expenses',
      items: [
        { type: 'link', text: 'Petty Cash', href: '/Expenses/petty-cash' },
        { type: 'link', text: 'Expenses', href: '/Expenses/add-expenses' },
      ],
    },
    {
      type: 'section',
      text: 'Configurations',
      items: [
        { type: 'link', text: 'Programs', href: '/configurations/program/list' },
        { type: 'link', text: 'Bank', href: '/configurations/bank/list' },
        { type: 'link', text: 'Industries', href: '/configurations/industries/list' },
        { type: 'link', text: 'Occupations', href: '/configurations/occupations/list' },
        { type: 'link', text: 'Beneficiary Types', href: '/configurations/beneficiary_types/list' },
        { type: 'link', text: 'Beneficiary Occupations', href: '/configurations/beneficiary_occupations/list' },
      ],
    },
    {
      type: 'section',
      text: 'Applications',
      items: [
        { type: 'link', text: 'ESP Applications', href: '/Applications/ESP_applications/list' },
        { type: 'link', text: 'HSP Applications', href: '/Applications/HSP_applications/list' },
        { type: 'link', text: 'WSP Applications', href: '/Applications/WSP_applications/list' },
        { type: 'link', text: 'EDP Applications', href: '/Applications/EDP_applications/list' },
      ],
    },
    { type: 'link', text: 'NGO\'s', href: '/ngo/list' },
    { type: 'link', text: 'Volunteers', href: '/volunteers/list' },
    { type: 'link', text: 'Beneficiary', href: '/beneficiary/list' },
    { type: 'link', text: 'Donations', href: '/donations/list' },
    { type: 'link', text: 'Historic Applications', href: '/page1' },
  ];

  const renderItems = (items) => {
    return items.map((item) => {
      if (item.type === 'link') {
        return {
          ...item,
          text: <CustomLink href={item.href}>{item.text}</CustomLink>,
        };
      }
      if (item.type === 'section') {
        return {
          ...item,
          items: renderItems(item.items),
        };
      }
      return item;
    });
  };

  return (
    <SideNavigation 
    
      header={{
        
        // href: '#',
        text: 'Quran Foundation',
        
      }}
      items={renderItems(items)}
    />
  );
};

export default Sidebar;
