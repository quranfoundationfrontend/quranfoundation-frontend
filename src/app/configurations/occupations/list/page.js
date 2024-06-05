"use client"
import React, { useState } from 'react';
import { Table, Box, SpaceBetween, Button, TextFilter, Header, ButtonDropdown, Pagination, CollectionPreferences } from "@cloudscape-design/components";

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
            item.beneficiaryType
        }}
        columnDefinitions={[
          {
            id: "beneficiaryType",
            header: "Beneficiary Type",
            cell: e => e.beneficiaryType,
            sortingField: "beneficiaryType",
            isRowHeader: true
          },
          { 
            id: "description", 
            header: "Description", 
            cell: e => e.description 
          },
          { 
            id: "eligibilityCriteria", 
            header: "Eligibility Criteria", 
            cell: e => e.eligibilityCriteria 
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
          { id: "beneficiaryType", visible: true },
          { id: "description", visible: true },
          { id: "eligibilityCriteria", visible: true },
          { id: "supportProgram", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            beneficiaryType: "Education",
            description: "Education support",
            eligibilityCriteria: "Students",
            supportProgram: "Scholarship"
          },
          {
            beneficiaryType: "Healthcare",
            description: "Healthcare services",
            eligibilityCriteria: "Low-income families",
            supportProgram: "Medical Assistance"
          },
          // Add more items here
        ]}
        loadingText="Loading beneficiary types..."
        selectionType="multi"
        trackBy="beneficiaryType"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No beneficiary types found</b>
              <Button>Add Beneficiary Type</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find beneficiary types"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + ")"
                : ""
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
            Beneficiary Types List
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
                { id: "beneficiaryType", visible: true },
                { id: "description", visible: true },
                { id: "eligibilityCriteria", visible: true },
                { id: "supportProgram", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 beneficiary types" },
                { value: 20, label: "20 beneficiary types" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "beneficiaryType",
                  label: "Beneficiary Type",
                  alwaysVisible: true
                },
                { id: "description", label: "Description" },
                { id: "eligibilityCriteria", label: "Eligibility Criteria" },
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
