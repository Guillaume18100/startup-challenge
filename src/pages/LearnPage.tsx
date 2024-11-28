import { ModuleCard } from '@/components/modules/ModuleCard';
import { LearningModule } from '@/types';

const modules: LearningModule[] = [
  {
    id: '1',
    title: 'Email Basics',
    description: 'Learn how to set up and use email effectively',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80',
    duration: '30 mins',
    difficulty: 'Beginner',
  },
  {
    id: '2',
    title: 'Internet Safety',
    description: 'Stay safe online with essential security practices',
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80',
    duration: '45 mins',
    difficulty: 'Beginner',
  },
  {
    id: '3',
    title: 'Smartphone Essentials',
    description: 'Master the basics of using your smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80',
    duration: '60 mins',
    difficulty: 'Intermediate',
  },
];

export function LearnPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Learning Modules</h1>
        <p className="text-muted-foreground">Choose a module to start learning</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
}