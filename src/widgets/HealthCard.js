"use client"
import { Box, ColumnLayout, Header, StatusIndicator } from '@cloudscape-design/components'
import React from 'react'

const HealthCard = () => {
  return (
  <>
    <Header
      variant="h2"
    //   info={
        // <InfoLink data-testid="service-health-info-link" onFollow={() => loadHelpPanelContent(<ServiceHealthInfo />)} />
    //   }
    >
      Service health
    </Header>
    <ColumnLayout columns={2}>
    <div>
      <Box variant="awsui-key-label">Region</Box>
      <div>US East (N. Virginia)</div>
    </div>
    <div>
      <Box variant="awsui-key-label">Status</Box>
      <StatusIndicator type="success">Service is operating normally</StatusIndicator>
    </div>
  </ColumnLayout>    <ColumnLayout columns={2}>
      <div>
        <Box variant="awsui-key-label">Region</Box>
        <div>US East (N. Virginia)</div>
      </div>
      <div>
        <Box variant="awsui-key-label">Status</Box>
        <StatusIndicator type="success">Service is operating normally</StatusIndicator>
      </div>
    </ColumnLayout>
  </>
  )
}

export default HealthCard