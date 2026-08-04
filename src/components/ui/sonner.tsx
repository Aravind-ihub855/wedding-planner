'use client';

import { useEffect } from 'react';
import { toast, Toaster as SonnerToaster } from 'sonner';

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <SonnerToaster
      {...props}
    />
  );
};

export { Toaster, toast };