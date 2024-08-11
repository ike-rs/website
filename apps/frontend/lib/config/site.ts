export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Packages',
      href: '/packages',
    },
  ],
  navMenuItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Packages',
      href: '/packages',
    },
  ],
  links: {
    github: 'https://github.com/ike-rs/ike',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://github.com/sponsors/malezjaa',
    docs: '/docs',
  },
};
