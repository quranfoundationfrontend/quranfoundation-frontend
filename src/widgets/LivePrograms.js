
"use client"
import { Box, ColumnLayout ,Link } from '@cloudscape-design/components'
import React from 'react'

const LiveePrograms = () => {
  return (
    <ColumnLayout columns={1} variant="text-grid" minColumnWidth={170}>
    <div>
      <Box variant="awsui-key-label">Total Revenue</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Running instances (14)">
      1234233$
      </Link>
    </div>
 
  </ColumnLayout>
  )
}

export default LiveePrograms;