import { AuthForm } from '@/components/auth/AuthForm';

export function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <AuthForm type="signup" />
    </div>
  );
}