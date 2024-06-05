"use client"
import React, { useState } from 'react';
import { Table, Box, SpaceBetween, Button, TextFilter, Header, ButtonDropdown, Pagination, CollectionPreferences } from "@cloudscape-design/components";

const Page = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const totalRows = 8; // Update this value based on the total number of items

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
            item.beneficiaryTypeName
        }}
        columnDefinitions={[
          {
            id: "beneficiaryTypeName",
            header: "Beneficiary Type Name",
            cell: e => e.beneficiaryTypeName,
            sortingField: "beneficiaryTypeName",
            isRowHeader: true
          },
          { 
            id: "description", 
            header: "Description", 
            cell: e => e.description 
          },
          { 
            id: "supportProgram", 
            header: "Support Program", 
            cell: e => e.supportProgram
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
          { id: "beneficiaryTypeName", visible: true },
          { id: "description", visible: true },
          { id: "supportProgram", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            beneficiaryTypeName: "Students",
            description: "Funding for education",
            supportProgram: "Education Support Program"
          },
          {
            beneficiaryTypeName: "House Wife",
            description: "Support for housewives",
            supportProgram: "Housewife Empowerment Fund"
          },
          {
            beneficiaryTypeName: "Widow",
            description: "Financial support for widows",
            supportProgram: "Widow Support Initiative"
          },
          {
            beneficiaryTypeName: "House Wife",
            description: "Support for housewives",
            supportProgram: "Housewife Empowerment Fund"
          },
          {
            beneficiaryTypeName: "House Wife",
            description: "Support for housewives",
            supportProgram: "Housewife Empowerment Fund"
          },
          {
            beneficiaryTypeName: "House Wife",
            description: "Support for housewives",
            supportProgram: "Housewife Empowerment Fund"
          },
          {
            beneficiaryTypeName: "Unemployed",
            description: "Financial assistance for the unemployed",
            supportProgram: "Employment Assistance Program"
          },
          // Add more items here
        ]}
        loadingText="Loading beneficiaries..."
        selectionType="multi"
        trackBy="beneficiaryTypeName"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No beneficiaries found</b>
              <Button>Add Beneficiary</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find beneficiaries Type"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + ")"
                : "(" + totalRows + ")"
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
                  Add Beneficiary Type
                </Button>
              </SpaceBetween>
            }
          >
            Beneficiary Types
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
                { id: "beneficiaryTypeName", visible: true },
                { id: "description", visible: true },
                { id: "supportProgram", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 beneficiaries" },
                { value: 20, label: "20 beneficiaries" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "beneficiaryTypeName",
                  label: "Beneficiary Type Name",
                  alwaysVisible: true
                },
                { id: "description", label: "Description" },
                { id: "supportProgram", label: "Support Program" },
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
