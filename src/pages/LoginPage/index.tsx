import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { LoginForm } from './components';

export const LoginPage = () => (
  <div className="container flex h-screen w-full items-center justify-center">
    <Card className="w-[400px]">
      <CardHeader>Login</CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  </div>
);
