"use client"
import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const Page = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  return (
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
        itemSelectionLabel: ({ selectedItems }, item) => item.applicationId
      }}
      columnDefinitions={[
        {
          id: "applicationId",
          header: "Application Id",
          cell: e => e.applicationId,
          sortingField: "applicationId",
          isRowHeader: true
        },
        {
          id: "category",
          header: "Category",
          cell: e => e.category,
          sortingField: "category"
        },
        {
          id: "beneficiaryName",
          header: "Beneficiary Name",
          cell: e => e.beneficiaryName,
          sortingField: "beneficiaryName"
        },
        {
          id: "amount",
          header: "Amount",
          cell: e => `$${e.amount.toFixed(2)}`,
          sortingField: "amount"
        },
        {
          id: "supportingYear",
          header: "Supporting Year",
          cell: e => e.supportingYear,
          sortingField: "supportingYear"
        },
        {
          id: "appliedBy",
          header: "Applied By",
          cell: e => e.appliedBy,
          sortingField: "appliedBy"
        },
        {
          id: "appliedOn",
          header: "Applied On",
          cell: e => e.appliedOn,
          sortingField: "appliedOn"
        },
        {
          id: "state",
          header: "State",
          cell: e => e.state,
          sortingField: "state"
        },
        {
          id: "status",
          header: "Status",
          cell: e => e.status,
          sortingField: "status"
        },
        {
          id: "action",
          header: "Action",
          cell: e => (
            <Button  variant="icon" iconName="check" onClick={() => alert(`Action for ${e.applicationId}`)}>
            
            </Button>
          )
        }
      ]}
      enableKeyboardNavigation
      items={[
        {
          applicationId: "APP-001",
          category: "Education",
          beneficiaryName: "John Doe",
          amount: 1500.00,
          supportingYear: 2023,
          appliedBy: "Jane Smith",
          appliedOn: "2023-05-01",
          state: "CA",
          status: "Approved"
        },
        {
          applicationId: "APP-002",
          category: "Health",
          beneficiaryName: "Alice Johnson",
          amount: 2000.00,
          supportingYear: 2023,
          appliedBy: "Bob Brown",
          appliedOn: "2023-05-02",
          state: "TX",
          status: "Pending"
        },
        {
          applicationId: "APP-003",
          category: "Welfare",
          beneficiaryName: "Michael Lee",
          amount: 1000.00,
          supportingYear: 2023,
          appliedBy: "Sarah Connor",
          appliedOn: "2023-05-03",
          state: "NY",
          status: "Rejected"
        }
      ]}
      loadingText="Loading applications"
      selectionType="multi"
      stickyColumns={{ first: 1, last: 0 }}
      stickyHeader
      trackBy="applicationId"
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No applications</b>
            <Button>Create application</Button>
          </SpaceBetween>
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find applications"
          filteringText=""
        />
      }
      header={
        <Header
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="primary" onClick={() => alert("Apply ESP Application")}>
                Apply ESP Application
              </Button>
              <Button onClick={() => alert("Export ESP Applications")}>
                Export ESP Applications
              </Button>
            </SpaceBetween>
          }
        >
          ESP Applications
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
              { id: "applicationId", visible: true },
              { id: "category", visible: true },
              { id: "beneficiaryName", visible: true },
              { id: "amount", visible: true },
              { id: "supportingYear", visible: true },
              { id: "appliedBy", visible: true },
              { id: "appliedOn", visible: true },
              { id: "state", visible: true },
              { id: "status", visible: true },
              { id: "action", visible: true }
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 10, label: "10 applications" },
              { value: 20, label: "20 applications" }
            ]
          }}
          wrapLinesPreference={{}}
          stripedRowsPreference={{}}
          contentDensityPreference={{}}
          contentDisplayPreference={{
            options: [
              {
                id: "applicationId",
                label: "Application Id",
                alwaysVisible: true
              },
              { id: "category", label: "Category" },
              { id: "beneficiaryName", label: "Beneficiary Name" },
              { id: "amount", label: "Amount" },
              { id: "supportingYear", label: "Supporting Year" },
              { id: "appliedBy", label: "Applied By" },
              { id: "appliedOn", label: "Applied On" },
              { id: "state", label: "State" },
              { id: "status", label: "Status" },
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
  );
};

export default Page;