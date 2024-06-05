
"use client"
import { Box, ColumnLayout ,Link } from '@cloudscape-design/components'
import React from 'react'

const WidgetCards = () => {
  return (
    <ColumnLayout columns={4} variant="text-grid" minColumnWidth={170}>
    <div>
      <Box variant="awsui-key-label">Donors</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Running instances (14)">
      123
      </Link>
    </div>
    <div>
      <Box variant="awsui-key-label">Beneficiaries</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Volumes (126)">
        126
      </Link>
    </div>
    <div>
      <Box variant="awsui-key-label"> Total Cash In Hand</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Security groups (116)">
      4566 $
      </Link>
    </div>
    <div>
      <Box variant="awsui-key-label">Account Balance</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Load balancers (28)">
      1223 $
      </Link>
    </div>
  </ColumnLayout>
  )
}

export default WidgetCards;