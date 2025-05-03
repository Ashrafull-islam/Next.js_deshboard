'use client';

import { useEffect } from 'react';

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('pace-running');
  }, []);

  return <>{children}</>;
}
