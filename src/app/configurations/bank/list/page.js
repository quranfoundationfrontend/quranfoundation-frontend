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
            item.bankName
        }}
        columnDefinitions={[
          {
            id: "bankName",
            header: "Bank Name",
            cell: e => e.bankName,
            sortingField: "bankName",
            isRowHeader: true
          },
          { 
            id: "description", 
            header: "Description", 
            cell: e => e.description 
          },
          { 
            id: "balanceAmount", 
            header: "Balance Amount", 
            cell: e => e.balanceAmount,
            sortingField: "balanceAmount" 
          },
          { 
            id: "bankNumber", 
            header: "Bank Number", 
            cell: e => e.bankNumber
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
          { id: "bankName", visible: true },
          { id: "description", visible: true },
          { id: "balanceAmount", visible: true },
          { id: "bankNumber", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            bankName: "Bank of Education",
            description: "Funds for education",
            balanceAmount: "$10,000",
            bankNumber: "123456"
          },
          {
            bankName: "Health Bank",
            description: "Healthcare funds",
            balanceAmount: "$20,000",
            bankNumber: "654321"
          },
          {
            bankName: "Water Bank",
            description: "Clean water support",
            balanceAmount: "$5,000",
            bankNumber: "112233"
          },
          {
            bankName: "Employment Bank",
            description: "Job creation funds",
            balanceAmount: "$15,000",
            bankNumber: "223344"
          },
          {
            bankName: "Empowerment Bank",
            description: "Women's empowerment",
            balanceAmount: "$25,000",
            bankNumber: "334455"
          },
          {
            bankName: "Relief Bank",
            description: "Disaster relief funds",
            balanceAmount: "$8,000",
            bankNumber: "445566"
          },
          {
            bankName: "SBI Bank",
            description: "General banking services",
            balanceAmount: "$30,000",
            bankNumber: "556677"
          },
          {
            bankName: "ICICI Domestic",
            description: "Domestic banking services",
            balanceAmount: "$40,000",
            bankNumber: "667788"
          }
        ]}
        loadingText="Loading banks..."
        selectionType="multi"
        trackBy="bankName"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No banks found</b>
              <Button>Add Bank</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find banks"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + "/8)"
                : "(8)"
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
                  Add Bank
                </Button>
              </SpaceBetween>
            }
          >
            Banks List
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
                { id: "bankName", visible: true },
                { id: "description", visible: true },
                { id: "balanceAmount", visible: true },
                { id: "bankNumber", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 banks" },
                { value: 20, label: "20 banks" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "bankName",
                  label: "Bank Name",
                  alwaysVisible: true
                },
                { id: "description", label: "Description" },
                { id: "balanceAmount", label: "Balance Amount" },
                { id: "bankNumber", label: "Bank Number" },
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
