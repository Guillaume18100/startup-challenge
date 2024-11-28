import { HomeIcon, BookOpenIcon, SearchIcon, UserIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: HomeIcon, label: 'Home', href: '/' },
  { icon: BookOpenIcon, label: 'Learn', href: '/learn' },
  { icon: SearchIcon, label: 'Solve', href: '/solve' },
  { icon: UserIcon, label: 'Profile', href: '/profile' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background">
      <div className="container mx-auto flex items-center justify-around py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex flex-col items-center gap-1 text-sm transition-colors',
              location.pathname === item.href
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}