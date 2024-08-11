'use client';

import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Link } from '@nextui-org/link';
import { User as UserType } from '@/lib/types';
import { useAuth } from '@/lib/context/auth';
import { Skeleton } from '@nextui-org/skeleton';
import {
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
} from '@nextui-org/dropdown';
import { $fetch } from '@/lib/fetcher';

export const User = () => {
  const { user, loading } = useAuth();

  if (loading) return <Skeleton className="flex rounded-full w-12 h-12" />;

  return user ? (
    <div className="flex gap-4 items-center">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            className="transition-transform"
            color="secondary"
            as="button"
            src={user.avatar}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Profile Actions"
          variant="flat"
          onAction={(key) => {
            switch (key) {
              case 'logout':
                $fetch('/auth/logout', {
                  method: 'POST',
                });
                window.location.href = '/';
            }
          }}
        >
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user.username}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">My packages</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ) : (
    <Link href="http://localhost:3001/auth/login">
      <Avatar showFallback src="https://images.unsplash.com/broken" />
    </Link>
  );
};
