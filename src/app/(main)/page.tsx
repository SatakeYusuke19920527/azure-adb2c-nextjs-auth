"use client";
import { useMsal } from '@azure/msal-react';
import { useEffect } from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';
import { loginRequest } from '../../lib/config';

export default function Home() {
  const { instance, accounts } = useMsal();
  const user = useCurrentUser();
  useEffect(() => {
    console.log('🚀 ~ SideMenu ~ user:', user);
    console.log('🚀 ~ SideMenu ~ accounts:', accounts);
  }, [accounts]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1
        onClick={() =>
          user === null
            ? instance.loginRedirect(loginRequest)
            : instance.logout()
        }
        className="flex justify-center px-4 text-2xl font-bold cursor-pointer"
      >
        {user === null ? 'login' : 'logout'}
      </h1>
    </main>
  );
}
