import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Button>Hello World</Button>
      <ModeToggle />
      <Button asChild>
        <Link href={'/form'}>Go to Form</Link>
      </Button>
    </div>
  );
}
