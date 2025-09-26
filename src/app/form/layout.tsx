import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import React from 'react';
import FormSidebar from '@/app/form/form-sidebar';
import FormViewport from '@/app/form/form-viewport';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='min-h-screen w-full'
    >
      <ResizablePanel
        defaultSize={20}
        minSize={15}
      >
        <FormSidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <FormViewport />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>Inspector Panel</ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Layout;
