import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-8 text-center">
      <div className="space-y-4">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <GraduationCap className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Master Technology Basics</h1>
        <p className="mx-auto max-w-md text-muted-foreground">
          Learn and master the basics of technology with personalized guidance. Start your journey
          today with interactive lessons and expert support.
        </p>
      </div>

      <div className="flex w-full max-w-md flex-col gap-4">
        <Button size="lg" className="w-full" asChild>
          <Link to="/signup">Sign Up</Link>
        </Button>
        <Button size="lg" variant="outline" className="w-full" asChild>
          <Link to="/login">Log In</Link>
        </Button>
      </div>
    </div>
  );
}