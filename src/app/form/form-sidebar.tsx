import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';
import { SettingsIcon } from 'lucide-react';

function FormSidebar() {
  return (
    <div className={'flex h-full flex-col justify-between'}>
      <div className={'flex items-center justify-between p-2'}>
        <h1 className={'text-xl'}>Eventasaurus</h1>
        <Button
          variant={'outline'}
          asChild
        >
          <Link href={'/dashboard'}>Dashboard</Link>
        </Button>
      </div>
      <Separator />
      <div className={'flex-1 p-2'}>Main Content</div>
      <div className={'flex items-center justify-center gap-4 p-2'}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={'flex items-center justify-between'}
              variant={'outline'}
            >
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <span>Mayank Pal</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
        <Button
          variant={'outline'}
          size={'icon'}
          asChild
        >
          <Link href={'/form/settings'}>
            <SettingsIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default FormSidebar;
