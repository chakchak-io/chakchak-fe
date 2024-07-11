export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
