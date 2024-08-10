import { codeToHtml } from 'shiki';

export default async function CodeBlock({
  lang,
  code,
}: {
  lang: string;
  code: string;
}) {
  const html = await codeToHtml(code, {
    lang,
    theme: 'vitesse-dark',
  });

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
