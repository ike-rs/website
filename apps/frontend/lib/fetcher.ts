export const fetcher = (url: string) =>
  fetch(new URL('http://localhost:3001' + url).toString(), {
    credentials: 'include'
  }).then((res) =>
    res.json(),
  );
