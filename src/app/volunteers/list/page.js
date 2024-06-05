"use client";
import React, { useState } from 'react';

import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const Page = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleActionClick = (action, item) => {
    if (action === 'edit') {
      console.log('Edit action on:', item);
      // Implement edit functionality here
    } else if (action === 'delete') {
      console.log('Delete action on:', item);
      // Implement delete functionality here
    }
  };

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
            item.donorId,
        }}
        columnDefinitions={[
          {
            id: "donorId",
            header: "Donor Id",
            cell: e => e.donorId,
            sortingField: "donorId",
            isRowHeader: true
          },
          {
            id: "donorName",
            header: "Donor Name",
            cell: e => e.donorName,
            sortingField: "donorName"
          },
          { 
            id: "email", 
            header: "Email", 
            cell: e => e.email 
          },
          { 
            id: "mobileNo", 
            header: "Mobile No", 
            cell: e => e.mobileNo 
          },
          {
            id: "action",
            header: "Action",
            cell: e => (
              <ButtonDropdown
                items={[
                  { text: "Edit", id: "edit" },
                  { text: "Delete", id: "delete" }
                ]}
                onItemClick={({ detail }) => handleActionClick(detail.id, e)}
              >
                Actions
              </ButtonDropdown>
            )
          }
        ]}
        columnDisplay={[
          { id: "donorId", visible: true },
          { id: "donorName", visible: true },
          { id: "email", visible: true },
          { id: "mobileNo", visible: true },
          { id: "action", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            donorId: "1",
            donorName: "John Doe",
            email: "john.doe@example.com",
            mobileNo: "1234567890"
          },
          {
            donorId: "2",
            donorName: "Jane Smith",
            email: "jane.smith@example.com",
            mobileNo: "0987654321"
          },
          // Add more dummy data as needed
        ]}
        loadingText="Loading Donations"
        selectionType="multi"
        trackBy="donorId"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No records found</b>
              <Button>Add Donor</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find records"
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
                  Add record
                </Button>
              </SpaceBetween>
            }
          >
            Donation List
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
                { id: "donorId", visible: true },
                { id: "donorName", visible: true },
                { id: "email", visible: true },
                { id: "mobileNo", visible: true },
                { id: "action", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 records" },
                { value: 20, label: "20 records" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "donorId",
                  label: "Donor Id",
                  alwaysVisible: true
                },
                { id: "donorName", label: "Donor Name" },
                { id: "email", label: "Email" },
                { id: "mobileNo", label: "Mobile No" },
                { id: "action", label: "Action" }
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
}

export default Page;
