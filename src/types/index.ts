export interface User {
  id: string;
  name: string;
  email: string;
  progress: {
    completedModules: string[];
    solvedProblems: string[];
  };
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Solution {
  id: string;
  question: string;
  steps: string[];
  imageUrl?: string;
}