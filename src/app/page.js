"use client"
import React from 'react'



import {
    AppLayout,
    BreadcrumbGroup,
    Button,
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
const page = () => {
  return (
    <>
   
<div className=''>
<Container 
      header={
        <Header
          variant="h2"
          description="Quran Foundation Desc sooon"
        >
         The Quran Foundation Stats
        </Header>
      }
    >


  <div className='flex justify-between'>
    
    <Header variant='h3' description={14} >Running</Header>
    <Header variant='h3' description={14} >Running</Header>
    <Header variant='h3' description={14} >Running</Header>

    <Header variant='h3' description={14} >Running</Header>
s
    </div>    
    

    </Container>


    <Container 
      header={
        <Header
          variant="h2"
          description="Quran Foundation Desc sooon"
        >
         The Quran Foundation Stats
        </Header>
      }
    >


  <div className='mb-[1.5rem]'>
    
    <Header variant='h3' description={14} >Running</Header>
    <Header variant='h3' description={14} >Running</Header>
    <Header variant='h3' description={14} >Running</Header>

    <Header variant='h3' description={14} >Running</Header>
s
    </div>    
    

    </Container>




</div>

{/* 1st and 2nd chart */}

<div className='flex justify-between'>

<Container  header={
      <Header
      variant="h2"
      description="Quran Foundation Desc sooon"
    >
     The Quran Foundation Stats
    </Header>

} >
    
</Container>

<Container  header={
      <Header
      variant="h2"
      description="Quran Foundation Desc sooon"
    >
     The Quran Foundation Stats
    </Header>

} >
    
</Container>
</div>
</>
  )
}

export default page