import { GitHub } from 'arctic';

export const github = new GitHub(
  process.env.CLIENT_ID as string,
  process.env.CLIENT_SECRET as string,
  {
    redirectURI: 'http://localhost:3001/auth/callback',
  },
);

export const getTokens = async (code: string) =>
  await github.validateAuthorizationCode(code);

export const getAccount = async (accessToken: string) => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const user = await response.json();

  if (!user) {
    throw new Error('Failed to get user account');
  }

  return user;
};

export const getEmail = async (accessToken: string) => {
  const response = await fetch('https://api.github.com/user/emails', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const emails = await response.json();

  return emails.find((email: any) => email.primary)?.email;
};
