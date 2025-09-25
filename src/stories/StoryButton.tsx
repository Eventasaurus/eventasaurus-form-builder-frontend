import { Button } from '@/components/ui/button';

export interface ButtonProps {
  label: string;
  variant?: 'default' | 'outline' | 'destructive' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export const StoryButton = ({
  label,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      {...props}
    >
      {label}
    </Button>
  );
};
