"use client"
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
            item.description
        }}
        columnDefinitions={[
          {
            id: "pettyCashId",
            header: "Petty Cash ID",
            cell: e => e.pettyCashId,
            sortingField: "pettyCashId",
            isRowHeader: true
          },
          {
            id: "withdrawnFrom",
            header: "Withdrawn From",
            cell: e => e.withdrawnFrom,
            sortingField: "withdrawnFrom"
          },
          {
            id: "withdrawnBy",
            header: "Withdrawn By",
            cell: e => e.withdrawnBy,
            sortingField: "withdrawnBy"
          },
          {
            id: "withdrawalDate",
            header: "Withdrawal Date",
            cell: e => e.withdrawalDate,
            sortingField: "withdrawalDate"
          },
          {
            id: "recordDate",
            header: "Record Date",
            cell: e => e.recordDate,
            sortingField: "recordDate"
          },
          {
            id: "description",
            header: "Description",
            cell: e => e.description
          },
          {
            id: "amount",
            header: "Amount",
            cell: e => `$${e.amount.toFixed(2)}`,
            sortingField: "amount"
          },
          {
            id: "action",
            header: "Action",
            cell: e => (
              <ButtonDropdown
                items={[
                  { id: "edit", text: "Edit" },
                  { id: "delete", text: "Delete" }
                ]}
                ariaLabel="Action options"
                variant="inline-icon"
              />
            )
          }
        ]}
        columnDisplay={[
          { id: "pettyCashId", visible: true },
          { id: "withdrawnFrom", visible: true },
          { id: "withdrawnBy", visible: true },
          { id: "withdrawalDate", visible: true },
          { id: "recordDate", visible: true },
          { id: "description", visible: true },
          { id: "amount", visible: true },
          { id: "action", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            pettyCashId: "PC001",
            withdrawnFrom: "Main Office",
            withdrawnBy: "John Doe",
            withdrawalDate: "2023-05-01",
            recordDate: "2023-05-02",
            description: "Office supplies",
            amount: 50.00
          },
          {
            pettyCashId: "PC002",
            withdrawnFrom: "Branch Office",
            withdrawnBy: "Jane Smith",
            withdrawalDate: "2023-05-02",
            recordDate: "2023-05-03",
            description: "Team lunch",
            amount: 30.75
          },
          {
            pettyCashId: "PC003",
            withdrawnFrom: "Main Office",
            withdrawnBy: "Jim Brown",
            withdrawalDate: "2023-05-03",
            recordDate: "2023-05-04",
            description: "Taxi fare",
            amount: 12.00
          },
          {
            pettyCashId: "PC004",
            withdrawnFrom: "Main Office",
            withdrawnBy: "Anna White",
            withdrawalDate: "2023-05-04",
            recordDate: "2023-05-05",
            description: "Client meeting refreshments",
            amount: 25.00
          },
          {
            pettyCashId: "PC005",
            withdrawnFrom: "Branch Office",
            withdrawnBy: "Chris Green",
            withdrawalDate: "2023-05-05",
            recordDate: "2023-05-06",
            description: "Office snacks",
            amount: 60.00
          },
          {
            pettyCashId: "PC006",
            withdrawnFrom: "Main Office",
            withdrawnBy: "Patricia Black",
            withdrawalDate: "2023-05-06",
            recordDate: "2023-05-07",
            description: "Printer ink",
            amount: 40.50
          }
        ]}
        loadingText="Loading petty cash records"
        selectionType="multi"
        trackBy="pettyCashId"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No records found</b>
              <Button>Add Expenses</Button>
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
                ? `(${selectedItems.length}/6)`
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
            Petty Cash Records
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
                { id: "pettyCashId", visible: true },
                { id: "withdrawnFrom", visible: true },
                { id: "withdrawnBy", visible: true },
                { id: "withdrawalDate", visible: true },
                { id: "recordDate", visible: true },
                { id: "description", visible: true },
                { id: "amount", visible: true },
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
                  id: "pettyCashId",
                  label: "Petty Cash ID",
                  alwaysVisible: true
                },
                { id: "withdrawnFrom", label: "Withdrawn From" },
                { id: "withdrawnBy", label: "Withdrawn By" },
                { id: "withdrawalDate", label: "Withdrawal Date" },
                { id: "recordDate", label: "Record Date" },
                { id: "description", label: "Description" },
                { id: "amount", label: "Amount" },
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
};

export default Page;
