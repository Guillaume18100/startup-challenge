import { LearningModule } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BarChart } from 'lucide-react';

interface ModuleCardProps {
  module: LearningModule;
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Card className="overflow-hidden">
      <img
        src={module.imageUrl}
        alt={module.title}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{module.title}</CardTitle>
        <CardDescription>{module.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{module.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="h-4 w-4" />
            <span>{module.difficulty}</span>
          </div>
        </div>
        <Button className="w-full">Start Learning</Button>
      </CardContent>
    </Card>
  );
}