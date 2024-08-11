'use client';

import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Link } from '@nextui-org/link';

export const User = () => {
  const { data, error, isLoading } = useSWR('/users/me', fetcher);
  console.log(data);

  return data ? (
    <div className="flex gap-4 items-center">
      <Avatar isBordered color="default" src={data.avatar} />
    </div>
  ) : (
    <Link href="http://localhost:3001/auth/login">
      <Avatar showFallback src="https://images.unsplash.com/broken" />
    </Link>
  );
};
