import React from 'react';
import { Button } from '@/components/ui/button';

interface FormComponentButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

function FormComponentButton({
  icon,
  text,
  onClick,
}: FormComponentButtonProps) {
  return (
    <Button
      variant={'ghost'}
      className={'flex h-full w-25 flex-col items-center justify-center border'}
      onClick={onClick}
    >
      {icon}
      <p>{text}</p>
    </Button>
  );
}

export default FormComponentButton;
