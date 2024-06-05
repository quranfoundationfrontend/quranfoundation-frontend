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
            item.occupationName
        }}
        columnDefinitions={[
          {
            id: "occupationName",
            header: "Occupation Name",
            cell: e => e.occupationName,
            sortingField: "occupationName",
            isRowHeader: true
          },
          { 
            id: "description", 
            header: "Description", 
            cell: e => e.description 
          },
          { 
            id: "averageSalary", 
            header: "Average Salary", 
            cell: e => e.averageSalary 
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
          { id: "occupationName", visible: true },
          { id: "description", visible: true },
          { id: "averageSalary", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            occupationName: "Plumber",
            description: "Plumbing work",
            averageSalary: "$0,000"
          },
          {
            occupationName: "Registered Nurse",
            description: "Provide patient care",
            averageSalary: "$70,000"
          },
          {
            occupationName: "Electrician",
            description: "Install and maintain electrical systems",
            averageSalary: "$55,000"
          },
          {
            occupationName: "Teacher",
            description: "Educate students",
            averageSalary: "$60,000"
          },
          {
            occupationName: "Teacher",
            description: "Educate students",
            averageSalary: "$60,000"
          },
          {
            occupationName: "Teacher",
            description: "Educate students",
            averageSalary: "$60,000"
          },
          {
            occupationName: "Teacher",
            description: "Educate students",
            averageSalary: "$60,000"
          },
          {
            occupationName: "Teacher",
            description: "Educate students",
            averageSalary: "$60,000"
          },
          {
            occupationName: "Teacher",
            description: "Educate students",
            averageSalary: "$60,000"
          },
          // Add more items here
        ]}
        loadingText="Loading occupations..."
        selectionType="multi"
        trackBy="occupationName"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No occupations found</b>
              <Button>Add Occupation</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find occupations"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + ")"
                : "(0)"
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
                  Add Occupation
                </Button>
              </SpaceBetween>
            }
          >
            Beneficiary Occupations
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
                { id: "occupationName", visible: true },
                { id: "description", visible: true },
                { id: "averageSalary", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 occupations" },
                { value: 20, label: "20 occupations" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "occupationName",
                  label: "Occupation Name",
                  alwaysVisible: true
                },
                { id: "description", label: "Description" },
                { id: "averageSalary", label: "Average Salary" },
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
