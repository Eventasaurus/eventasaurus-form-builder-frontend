import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ButtonProps {
  label: string;
  variant?: 'default' | 'outline' | 'destructive' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  width?: 'full' | 'auto';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const StoryButton = ({
  label,
  variant = 'default',
  size = 'default',
  width = 'auto',
  rounded = 'md',
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(width === 'full' && 'w-full', `rounded-${rounded}`)}
      {...props}
    >
      {label}
    </Button>
  );
};
