"use client"
import React, { useState } from 'react';
import { Table, Box, SpaceBetween, Button, TextFilter, Header, ButtonDropdown, Pagination, CollectionPreferences } from "@cloudscape-design/components";

const Page = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { industryName: "Agriculture", id: "1" },
    { industryName: "Automotive", id: "2" },
    { industryName: "Banking", id: "3" },
    { industryName: "Construction", id: "4" },
    { industryName: "Education", id: "5" },
    { industryName: "Energy", id: "6" },
    { industryName: "Entertainment", id: "7" },
    { industryName: "Finance", id: "8" },
    { industryName: "Food & Beverage", id: "9" },

  
  ];

  return (
    <div>
      <Table
     onRowClick={()=>{
      console.log("clissssss")
     }}
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
            item.industryName
        }}
        columnDefinitions={[
          {
            id: "industryName",
            header: "Industry Name",
            cell: e => e.industryName,
            sortingField: "industryName",
            isRowHeader: true
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
          { id: "industryName", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={items}
        loadingText="Loading industries..."
        selectionType="multi"
        trackBy="industryName"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No industries found</b>
              <Button>Add Industry</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find industries"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + "/22)"
                : "(22)"
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
                  Add Industry
                </Button>
              </SpaceBetween>
            }
          >
            Industries List
          </Header>
        }
        pagination={
          <Pagination currentPageIndex={1} pagesCount={3} />
        }
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{
              pageSize: 10,
              contentDisplay: [
                { id: "industryName", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 industries" },
                { value: 20, label: "20 industries" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "industryName",
                  label: "Industry Name",
                  alwaysVisible: true
                },
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
