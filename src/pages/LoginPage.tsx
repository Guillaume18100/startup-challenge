import { AuthForm } from '@/components/auth/AuthForm';

export function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <AuthForm type="login" />
    </div>
  );
}