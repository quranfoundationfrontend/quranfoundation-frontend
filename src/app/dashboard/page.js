"use client"
import React from 'react'



import {
    AppLayout,
    BreadcrumbGroup,
    Button,
    Cards,
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
import BeneficiariesChart from '@/components/Charts/BeneficiariesChart';
import DonorsCharts from '@/components/Charts/DonorsCharts';
const page = () => {
  return (
   <>
    <div className=' w-[100%] '>
   

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

   
<div className='flex justify-between' >
   <div className='flex  p-3 flex-col gap-4'> 
     <span className='font-bold text-[1rem]'>Donors</span>
     <span className=' underline font-bold text-[#0972d3] text-[2rem]'>123</span>
   </div>
   
   <div className='flex p-3 flex-col gap-4'>
     <span className='font-bold text-[1rem]'>Beneficiaries</span>
     <span className=' underline  font-bold text-[#0972d3] text-[2rem]'>123</span>
   </div>
   <div className='flex p-3 flex-col gap-4'>
     <span className='font-bold text-[1rem] s'>Total Cash In Hand

</span>
     <span className=' underline font-bold text-[#0972d3] text-[2rem]'>123</span>
   </div>
   
   <div className='flex p-3 flex-col gap-4'>
     <span className='font-bold text-[1rem]'>Total Account Balance

</span>
     <span className=' underline font-bold text-[#0972d3] text-[2rem]'>123</span>
   </div>
      
 </div>  

   </Container>

{/* <Container 
  header={
   <Header
     variant="h2"
     description="Quran Foundation Desc sooon"
   >
    The Quran Foundation Stats
   </Header>}
// > */}

{/* </Container> */}
 
</div>

{/* second section */}
<div className='mt-4 flex-wrap justify-between flex'>

  <div className='w-[60%] h-[auto]'>
<Container 
fitHeight={true}
  header={
    <Header
    variant="h2"
    description="Beneficiaries By Type "
    >
    Donations vs Distributions
   </Header>}
>
<BeneficiariesChart/>
</Container>
  </div>

<div className='w-[39%]'>

<Container 
header={
  <Header
    variant="h2"
    description="Beneficiaries By Type "
    >
    Donations vs Distributions
   </Header>
}
>
<DonorsCharts />
</Container>
</div>

</div>

{/* temoporyyy chartz */}
<div className='flex  w-[100%] justify-between mt-[1rem]'>
  <div className='w-[32%]'>
  <Container>
<DonorsCharts/>
  </Container>
  </div>


  <div className='w-[32%]'>
  <Container>
<DonorsCharts/>
  </Container>
  </div>

  <div className='w-[32%]'>
  <Container>
<DonorsCharts/>
  </Container>
  </div>

</div>
   </>
  )
}

export default page