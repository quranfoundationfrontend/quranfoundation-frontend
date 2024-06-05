"use client"
import React, { useState } from 'react';
import { Table, Box, SpaceBetween, Button, TextFilter, Header, ButtonDropdown, Pagination, CollectionPreferences } from "@cloudscape-design/components";
// import { EditIcon, DeleteIcon } from '@cloudscape-design/icons';

const Page = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div>
      <Table
        onSelectionChange={({ detail }) =>
          setSelectedItems(detail.selectedItems)
        }
        selectedItems={selectedItems}
        ariaLabels={{
          selectionGroupLabel: "Items selection",
          allItemsSelectionLabel: ({ selectedItems }) =>
            `${selectedItems.length} ${
              selectedItems.length === 1 ? "item" : "items"
            } selected`,
          itemSelectionLabel: ({ selectedItems }, item) =>
            item.programName
        }}
        columnDefinitions={[
          {
            id: "programName",
            header: "Program Name",
            cell: e => e.programName,
            sortingField: "programName",
            isRowHeader: true
          },
          {
            id: "category",
            header: "Category",
            cell: e => e.category,
            sortingField: "category"
          },
          { 
            id: "description", 
            header: "Description", 
            cell: e => e.description 
          },
          { 
            id: "status", 
            header: "Status", 
            cell: e => (
              <span style={{ color: e.status === 'Active' ? 'green' : 'red' }}>
                {e.status}
              </span>
            ) 
          },
          { 
            id: "balanceAmount", 
            header: "Balance Amount", 
            cell: e => e.balanceAmount,
            sortingField: "balanceAmount" 
          },
          {
            id: "actions",
            header: "Actions",
            cell: e => (
              <ButtonDropdown
                items={[
                  { id: "start", text: "Start" },
                  { id: "stop", text: "Stop", disabled: true },
                  {
                    id: "hibernate",
                    text: "Hibernate",
                    disabled: true
                  },
                  { id: "reboot", text: "Reboot", disabled: true },
                  { id: "terminate", text: "Terminate" }
                ]}
                ariaLabel="Control instance"
                variant="inline-icon"
              />
            ),
          }
        ]}
        columnDisplay={[
          { id: "programName", visible: true },
          { id: "category", visible: true },
          { id: "description", visible: true },
          { id: "status", visible: true },
          { id: "balanceAmount", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            programName: "Education for All",
            category: "Education",
            description: "Providing free education for underprivileged children",
            status: "Active",
            balanceAmount: "$10,000"
          },
          {
            programName: "Healthcare Access",
            category: "Health",
            description: "Ensuring access to basic healthcare services",
            status: "Active",
            balanceAmount: "$20,000"
          },
          {
            programName: "Clean Water Initiative",
            category: "Sanitation",
            description: "Providing clean drinking water to rural areas",
            status: "Inactive",
            balanceAmount: "$5,000"
          },
          {
            programName: "Youth Employment",
            category: "Employment",
            description: "Creating job opportunities for youth",
            status: "Active",
            balanceAmount: "$15,000"
          },
          {
            programName: "Women Empowerment",
            category: "Social",
            description: "Programs aimed at empowering women",
            status: "Active",
            balanceAmount: "$25,000"
          },
          {
            programName: "Disaster Relief",
            category: "Relief",
            description: "Providing aid during natural disasters",
            status: "Inactive",
            balanceAmount: "$8,000"
          }
        ]}
        loadingText="Loading programs..."
        selectionType="multi"
        trackBy="programName"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No programs found</b>
              <Button>Add Program</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find programs"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + "/6)"
                : "(6)"
            }
            actions={
              <SpaceBetween
                direction="horizontal"
                size="xs"
              >
                <ButtonDropdown
                  items={[
                    {
                      text: "Export",
                      id: "export",
                      disabled: false
                    },
                    {
                      text: "Delete",
                      id: "delete",
                      disabled: false
                    }
                  ]}
                >
                  Actions
                </ButtonDropdown>
                <Button variant="primary">
                  Add Program
                </Button>
              </SpaceBetween>
            }
          >
             Programs List
          </Header>
        }
        pagination={
          <Pagination currentPageIndex={1} pagesCount={1} />
        }
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{
              pageSize: 10,
              contentDisplay: [
                { id: "programName", visible: true },
                { id: "category", visible: true },
                { id: "description", visible: true },
                { id: "status", visible: true },
                { id: "balanceAmount", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 programs" },
                { value: 20, label: "20 programs" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "programName",
                  label: "Program Name",
                  alwaysVisible: true
                },
                { id: "category", label: "Category" },
                { id: "description", label: "Description" },
                { id: "status", label: "Status" },
                { id: "balanceAmount", label: "Balance Amount" },
                { id: "actions", label: "Actions" }
              ]
            }}
            stickyColumnsPreference={{
              firstColumns: {
                title: "Stick first column(s)",
                description:
                  "Keep the first column(s) visible while horizontally scrolling the table content.",
                options: [
                  { label: "None", value: 0 },
                  { label: "First column", value: 1 },
                  { label: "First two columns", value: 2 }
                ]
              },
              lastColumns: {
                title: "Stick last column",
                description:
                  "Keep the last column visible while horizontally scrolling the table content.",
                options: [
                  { label: "None", value: 0 },
                  { label: "Last column", value: 1 }
                ]
              }
            }}
          />
        }
      />
    </div>
  );
};

export default Page;
