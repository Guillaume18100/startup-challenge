import { useState } from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { SearchResults } from '@/components/search/SearchResults';
import { Solution } from '@/types';

const commonSolutions: Solution[] = [
  {
    id: '1',
    question: 'How do I create a strong password?',
    steps: [
      'Use at least 12 characters',
      'Include numbers, symbols, and both uppercase and lowercase letters',
      'Avoid personal information',
      'Use different passwords for different accounts',
    ],
  },
  {
    id: '2',
    question: 'How do I connect to Wi-Fi?',
    steps: [
      'Open your device settings',
      'Tap on Wi-Fi or Network settings',
      'Select your network from the list',
      'Enter the password if required',
    ],
  },
];

export function SolvePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Problem Solving</h1>
        <p className="text-muted-foreground">Find solutions to common tech problems</p>
      </div>
      
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          {searchQuery ? 'Search Results' : 'Common Solutions'}
        </h2>
        <SearchResults solutions={commonSolutions} query={searchQuery} />
      </div>
    </div>
  );
}