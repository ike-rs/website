import { Link } from '@nextui-org/link';
import { siteConfig } from '@/lib/config/site';
import { DiscordIcon, GithubIcon, Logo } from '@/components/icons';
import NextLink from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-borderLight">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NextLink
              className="flex justify-start items-center gap-1 text-xl"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">Ike</p>
            </NextLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="font-medium gap-2 flex flex-col">
                <li>
                  <Link
                    isExternal
                    aria-label="Main page"
                    href={'/'}
                    color="foreground"
                  >
                    Main page
                  </Link>
                </li>
                <li>
                  <Link
                    isExternal
                    aria-label="About"
                    href={'/about'}
                    color="foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    isExternal
                    aria-label="Documentation"
                    href={'/docs'}
                    color="foreground"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Registry
              </h2>
              <ul className="font-medium gap-2 flex flex-col">
                <li>
                  <Link
                    isExternal
                    aria-label="Packages"
                    href={'/packages'}
                    color="foreground"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    isExternal
                    aria-label="New package"
                    href={'/packages/new'}
                    color="foreground"
                  >
                    Create new package
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium gap-2 flex flex-col">
                <li>
                  <Link
                    isExternal
                    aria-label="Github"
                    href={siteConfig.links.github}
                    color="foreground"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    isExternal
                    aria-label="Discord"
                    href={siteConfig.links.discord}
                    color="foreground"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="font-medium gap-2 flex flex-col">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border border-borderLight sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="/" className="hover:underline">
              Ike
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
            <Link
              isExternal
              aria-label="Discord"
              href={siteConfig.links.discord}
            >
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
