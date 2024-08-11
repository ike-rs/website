'use client';

import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Link } from '@nextui-org/link';
import { User as UserType } from '@/lib/types';
import { useAuth } from '@/lib/context/auth';
import { Skeleton } from '@nextui-org/skeleton';

export const User = () => {
  const { user, loading } = useAuth();

  if (loading) return <Skeleton className="flex rounded-full w-12 h-12" />;

  return user ? (
    <div className="flex gap-4 items-center">
      <Avatar isBordered color="default" src={user.avatar} />
    </div>
  ) : (
    <Link href="http://localhost:3001/auth/login">
      <Avatar showFallback src="https://images.unsplash.com/broken" />
    </Link>
  );
};
