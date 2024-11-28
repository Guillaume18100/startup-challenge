import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ModuleProgress } from '@/components/modules/ModuleProgress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCircle2 } from 'lucide-react';

export function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const totalModules = 10;

  return (
    <div className="space-y-6">
      <ProfileHeader user={user} />

      <div className="grid gap-6 md:grid-cols-3">
        <ModuleProgress
          completed={user.progress.completedModules.length}
          total={totalModules}
        />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Problems Solved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{user.progress.solvedProblems.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}