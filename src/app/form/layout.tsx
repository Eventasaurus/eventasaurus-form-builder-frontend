import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import React from 'react';
import FormSidebar from '@/app/form/form-sidebar';

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
        <div className='flex h-full items-center justify-center p-6'>
          <span className='font-semibold'>Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>Inspector Panel</ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Layout;
