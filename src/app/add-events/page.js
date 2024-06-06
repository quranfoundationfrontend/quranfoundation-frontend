"use client"
import React, { useState } from 'react'

import Input from "@cloudscape-design/components/input";

import {
    AppLayout,
    BreadcrumbGroup,
    Button,

    Container,
    ContentLayout,
    FileUpload,
    Flashbar,
    Form,
    FormField,
    Header,
    HelpPanel,
    Link,
    SideNavigation,
    SpaceBetween,
    SplitPanel,
    Textarea,
  } from '@cloudscape-design/components';
const Page = () => {
    const [value, setValue] = useState([]);

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
              <Button  variant="normal">Add Event</Button>
            </SpaceBetween>
          }
          header={
            <Header variant="h3">Add Event Details</Header>
          }
        >
            <div className='flex gap-2 justify-between'>

             <FormField  label="Event Name*">
              <Input  type='x' value={adharrNum} onChange={handleAdhaarChange} placeholder='Event Name'/>
            </FormField>

            <FormField label="Event Manager*">
            <Input  type='number' value={rationNum} onChange={handleRationChange} placeholder='Event Manager Name'/>
            </FormField>

            <FormField label="Event Location*">
              <Input type='number' value={mobNum} onChange={handleMobChange} placeholder='Add Event Location' />
            </FormField>

            <FormField label="Event Location*">
              <Input type='number' value={mobNum} onChange={handleMobChange} placeholder='Add Event Location' />
            </FormField>
            </div>

            <div className='flex justify-start items-center gap-2 mt-[1rem]'>
                <div className='w-[100%]'>
            <FormField label="Event Description*">
                <Textarea  >

              <Input type='number' placeholder='Search Reference Name' />
                </Textarea>
            </FormField>
            </div>
           
            </div>


            <div className='w-[100%] mt-[1rem]'>
                <FormField label="Add Event Thumbnal*">
                <FormField
  
    >
      <FileUpload
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
        i18nStrings={{
          uploadButtonText: e =>
            e ? "Choose files" : "Choose file",
          dropzoneText: e =>
            e
              ? "Drop files to upload"
              : "Drop file to upload",
          removeFileAriaLabel: e =>
            `Remove file ${e + 1}`,
          limitShowFewer: "Show fewer files",
          limitShowMore: "Show more files",
          errorIconAriaLabel: "Error"
        }}
        showFileLastModified
        showFileSize
        showFileThumbnail
        tokenLimit={3}
      />
    </FormField>
                </FormField>
            </div>
        </Form>
      </form>
      </Container>

    </div>
  )
}

export default Page