// // Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// // SPDX-License-Identifier: MIT-0
// "use client"
// import React, { useRef, useState } from 'react';
// import { createRoot } from 'react-dom/client';

// import Button from '@cloudscape-design/components/button';
// import Grid from '@cloudscape-design/components/grid';
// import SpaceBetween from '@cloudscape-design/components/space-between';

// import '@cloudscape-design/global-styles/dark-mode-utils.css';
// // import '../../styles/base.scss';

// import { DashboardHeader, DashboardMainInfo } from './components/header';
// import { CustomAppLayout } from '../commons/common-components';
// // import { DashboardSideNavigation } from './components/side-navigation';
// // import { Breadcrumbs, Notifications, HelpPanelProvider } from '../commons';

// import HealthCard from '@/widgets/HealthCard';
// import WidgetCards from '@/widgets/WidgetCards';

// function Content() {
//   return (
//     <Grid
//       gridDefinition={[
//         { colspan: { l: 8, m: 8, default: 12 } },
//         { colspan: { l: 4, m: 4, default: 12 } },
//         { colspan: { l: 6, m: 6, default: 12 } },
//         { colspan: { l: 6, m: 6, default: 12 } },
//         { colspan: { l: 6, m: 6, default: 12 } },
//         { colspan: { l: 6, m: 6, default: 12 } },
//         { colspan: { l: 6, m: 6, default: 12 } },
//         { colspan: { l: 6, m: 6, default: 12 } },
//         { colspan: { l: 8, m: 8, default: 12 } },
//         { colspan: { l: 4, m: 4, default: 12 } },
//       ]}
//     >
//       {[
//         HealthCard,
//         WidgetCards
       
//       ].map((widget, index) => (
//         <BaseStaticWidget key={index} config={widget.data} />
//       ))}
//     </Grid>
//   );
// }

// function App() {
//   const [toolsOpen, setToolsOpen] = useState(false);
//   const [toolsContent, setToolsContent] = useState(() => <DashboardMainInfo />);
//   const appLayout = useRef(null);

//   const handleToolsContentChange = (content) => {
//     setToolsOpen(true);
//     setToolsContent(content);
//     appLayout.current?.focusToolsClose();
//   };

//   return (
//     <HelpPanelProvider value={handleToolsContentChange}>
//       <CustomAppLayout
//         ref={appLayout}
//         content={
//           <SpaceBetween size="m">
//             <DashboardHeader actions={<Button variant="primary">Launch instance</Button>} />
//             <Content />
//           </SpaceBetween>
//         }
//         breadcrumbs={<Breadcrumbs items={[{ text: 'Dashboard', href: '#/' }]} />}
//         // navigation={<DashboardSideNavigation />}
//         // tools={toolsContent}
//         // toolsOpen={toolsOpen}
//         // onToolsChange={({ detail }) => setToolsOpen(detail.open)}
//         // notifications={<Notifications />}
//       />
//     </HelpPanelProvider>
//   );
// }

// // createRoot(document.getElementById('app')).render(<App />);
