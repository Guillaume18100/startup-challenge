import { Solution } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface SearchResultsProps {
  solutions: Solution[];
  query: string;
}

export function SearchResults({ solutions, query }: SearchResultsProps) {
  const filteredSolutions = query
    ? solutions.filter((solution) =>
        solution.question.toLowerCase().includes(query.toLowerCase())
      )
    : solutions;

  if (query && filteredSolutions.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No solutions found for "{query}"
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {filteredSolutions.map((solution) => (
        <Card key={solution.id} className="cursor-pointer hover:bg-accent/50">
          <CardHeader>
            <CardTitle className="text-lg">{solution.question}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <CardDescription>{solution.steps.length} steps</CardDescription>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}