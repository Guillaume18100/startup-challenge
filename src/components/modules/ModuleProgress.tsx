import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface ModuleProgressProps {
  completed: number;
  total: number;
}

export function ModuleProgress({ completed, total }: ModuleProgressProps) {
  const progress = (completed / total) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-2" />
        <p className="text-sm text-muted-foreground">
          {completed} of {total} modules completed
        </p>
      </CardContent>
    </Card>
  );
}