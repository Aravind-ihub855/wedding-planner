'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const publicPaths = ['/login', '/register', '/api'];
    const isPublic = publicPaths.some((p) => pathname.startsWith(p));

    const currentUser = localStorage.getItem('currentUser');

    if (!isPublic && !currentUser) {
      setAuthorized(false);
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  if (!authorized && !['/login', '/register'].includes(pathname)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400 font-sans text-xs">
        Checking authentication status...
      </div>
    );
  }

  return <>{children}</>;
}
