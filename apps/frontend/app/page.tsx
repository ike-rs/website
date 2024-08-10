import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { button as buttonStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import { FlipWords } from '@/components/ui/words';
import { ShootingStars, StarsBackground } from '@/components/ui/stars';
import CodeBlock from '@/components/atoms/codeblock';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ size: 'lg' })}>Develop&nbsp;</h1>
          <h1 className={title({ color: 'primary', size: 'lg' })}>
            Javascript&nbsp;
          </h1>
          <br />
          <h1 className={title({ size: 'lg' })}>applications</h1> <br />
          <FlipWords words={['fast', 'with ease', 'using Typescript']} />
          <h2 className={subtitle({ class: 'mt-4' })}>
            Ike is a Javascript runtime written in Rust.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: 'bordered', radius: 'full' })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet variant="flat" color="primary">
            irm https://ike.malezjaa.pl/install.ps1 | iex
          </Snippet>
        </div>

        <ShootingStars />
        <StarsBackground />

        <div className={'mt-[20rem]'}></div>
      </section>

      <div
        className={
          'w-full flex flex-col items-center gap-24 md:gap-32 section-x-inset-xl'
        }
      >
        <Section
          leftContent={
            <CodeBlock
              lang={'typescript'}
              code={
                'enum Status { \n Active, \n  Inactive, \n  Pending \n}\n\n' +
                'function getStatus(status: Status): string { \n  return Status[status]; \n}' +
                '\n\ngetStatus(Status.Active); // Active'
              }
            />
          }
          rightContent={
            <div className={'flex flex-col mx-5 items-start'}>
              <h3 className={title({ size: 'md' })}>
                Built-in support for Typescript
              </h3>
              <p className={subtitle({ class: 'mt-4' })}>
                Ike has built-in support for Typescript out of the box thanks to
                Oxc Transformer.
              </p>
            </div>
          }
        />

        <Section
          rightContent={
            <CodeBlock
              lang={'typescript'}
              code={
                "import { describe, it, expect } from 'test';\n\ndescribe('should add 1 + 1', () => {\n  it('should return 2', () => {\n    expect(1 + 1).toBe(2);\n  });\n});"
              }
            />
          }
          leftContent={
            <div className={'flex flex-col mx-5 items-start'}>
              <h3 className={title({ size: 'md' })}>Built-in Test Runner</h3>
              <p className={subtitle({ class: 'mt-4' })}>
                Ike provides a built-in test runner with assertion utils.
              </p>

              <Snippet
                className={'w-full mt-2'}
                variant={'flat'}
                color={'primary'}
              >
                ike test --pattern numbers
              </Snippet>
            </div>
          }
        />

        <div className={'gap-3 flex flex-col'}>
          <h2 className={title({ size: 'md' })}>
            <span className={'text-danger'}>Cargo</span> inspired package
            manager
          </h2>
          <p className={subtitle({ class: 'mt-4' }) + ' text-center'}>
            Ike also comes with own registry
          </p>

          <CodeBlock
            lang={'toml'}
            code={
              '[package]\n' +
              'name = "ike"\n' +
              'version = "0.1.0"\n' +
              'main = "src/index.ts"\n' +
              '\n' +
              '[dependencies]\n' +
              'uuid = { version = "0.8.1", features = ["v4"] }\n\n' +
              '[tasks]\n' +
              'test = "ike test --pattern numbers"\n'
            }
          />

          <Snippet className={'w-full'} variant={'flat'} color={'primary'}>
            ike add uuid --features v4
          </Snippet>
        </div>

        <div className={'mt-24'}></div>
      </div>
    </>
  );
}

const Section = ({
  leftContent,
  rightContent,
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) => (
  <div className="grid grid-cols-1 items-center gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-2 py-5">
    <div className="w-full">{leftContent}</div>
    <div className="w-full">{rightContent}</div>
  </div>
);
