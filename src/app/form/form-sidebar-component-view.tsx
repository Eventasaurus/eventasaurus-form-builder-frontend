import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';
import FormComponentButton from '@/app/form/form-component-button';
import {
  ClipboardIcon,
  HeadingIcon,
  ImageIcon,
  ImagePlayIcon,
  LayoutGridIcon,
  LinkIcon,
  ListChevronsDownUpIcon,
  ListIcon,
  RectangleEllipsisIcon,
  SeparatorHorizontalIcon,
  SquareArrowDownIcon,
  SquareArrowRightIcon,
  SquareIcon,
  SquareSquareIcon,
  TextAlignStartIcon,
} from 'lucide-react';

function FormSidebarComponentView() {
  return (
    <div className={'p-2'}>
      <div>
        <Accordion
          type='multiple'
          defaultValue={['structure', 'basic', 'typography']}
        >
          <AccordionItem value='structure'>
            <AccordionTrigger>Structure</AccordionTrigger>
            <AccordionContent className={'flex flex-wrap gap-2'}>
              <FormComponentButton
                icon={<SquareArrowDownIcon className={'size-7'} />}
                text={'V Flex'}
              />
              <FormComponentButton
                icon={<SquareArrowRightIcon className={'size-7'} />}
                text={'H Flex'}
              />
              <FormComponentButton
                icon={<LayoutGridIcon className={'size-7'} />}
                text={'Grid'}
              />
              <FormComponentButton
                icon={<SquareSquareIcon className={'size-7'} />}
                text={'Container'}
              />
              <FormComponentButton
                icon={<SquareIcon className={'size-7'} />}
                text={'Div Block'}
              />
              <FormComponentButton
                icon={<ClipboardIcon className={'size-7'} />}
                text={'Form Block'}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='basic'>
            <AccordionTrigger>Basic</AccordionTrigger>
            <AccordionContent className={'flex flex-wrap gap-2'}>
              <FormComponentButton
                icon={<RectangleEllipsisIcon className={'size-7'} />}
                text={'Button'}
              />
              <FormComponentButton
                icon={<LinkIcon className={'size-7'} />}
                text={'Link'}
              />
              <FormComponentButton
                icon={<ListIcon className={'size-7'} />}
                text={'List'}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='typography'>
            <AccordionTrigger>Typography & Media</AccordionTrigger>
            <AccordionContent className={'flex flex-wrap gap-2'}>
              <FormComponentButton
                icon={<HeadingIcon className={'size-7'} />}
                text={'Heading'}
              />
              <FormComponentButton
                icon={<TextAlignStartIcon className={'size-7'} />}
                text={'Paragraph'}
              />
              <FormComponentButton
                icon={<ImageIcon className={'size-7'} />}
                text={'Image'}
              />
              <FormComponentButton
                icon={<ImagePlayIcon className={'size-7'} />}
                text={'Gif'}
              />
              <FormComponentButton
                icon={<ListChevronsDownUpIcon className={'size-7'} />}
                text={'Accordion'}
              />
              <FormComponentButton
                icon={<SeparatorHorizontalIcon className={'size-7'} />}
                text={'Separator'}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FormSidebarComponentView;
