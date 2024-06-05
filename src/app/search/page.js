"use client"
import React, { useState } from 'react'

import Input from "@cloudscape-design/components/input";

import {
    AppLayout,
    BreadcrumbGroup,
    Button,

    Container,
    ContentLayout,
    Flashbar,
    Form,
    FormField,
    Header,
    HelpPanel,
    Link,
    SideNavigation,
    SpaceBetween,
    SplitPanel,
  } from '@cloudscape-design/components';
const page = () => {
  const [adharrNum,SetAdhaarNum] = useState('')

  const [rationNum,SetRationNum] = useState('')

  const [mobNum,setMobNum] = useState('')

  const handleAdhaarChange = (event) => {
    const value = event.detail.value;
    if (/^\d*$/.test(value)) { // Allow only digits
      SetAdhaarNum(value);
    }
  };

  const handleRationChange = (event) => {
    const value = event.detail.value;
    if (/^\d*$/.test(value)) { // Allow only digits
      SetRationNum(value);
    }
  };

  const handleMobChange = (event) => {
    const value = event.detail.value;
    if (/^\d*$/.test(value)) { // Allow only digits
      setMobNum(value);
    }
  };

  return (
    <div>

<Container>

<form onSubmit={e => e.preventDefault()}>
        <Form
          variant="embedded"
          actions={
            <SpaceBetween
              direction="horizontal"
              size="xs"
            >
              <Button formAction="none" Link="#dashboard" variant="link">
                Cancel
              </Button>
              <Button  variant="primary">Search</Button>
            </SpaceBetween>
          }
          header={
            <Header variant="h3">Search Information</Header>
          }
        >
            <div className='flex justify-between'>

             <FormField  label="Search Adhar Number*">
              <Input  type='number' value={adharrNum} onChange={handleAdhaarChange} placeholder='Please enter beneficiary adhar number'/>
            </FormField>

            <FormField label="Search Ration Number*">
            <Input  type='number' value={rationNum} onChange={handleRationChange} placeholder='Please enter beneficiary adhar number'/>
            </FormField>

            <FormField label="Search Mobile Number*">
              <Input type='number' value={mobNum} onChange={handleMobChange} placeholder='Search Mobile Number' />
            </FormField>

            <FormField label="Search By Reference*">
              <Input type='number' placeholder='Search Reference Name' />
            </FormField>

            </div>
        </Form>
      </form>
      </Container>

<div className='mt-[1.5rem]'>
<Container>

No Search Results.....
</Container>
</div>


    </div>
  )
}

export default page