'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Don't show the app navbar on the landing page (root route)
  if (pathname === '/') return null;

  return <Navbar />;
}
