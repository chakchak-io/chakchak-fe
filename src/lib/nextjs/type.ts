export type CommonNextPageProps<Params = {}> =
  Params extends Record<string, string>
    ? {
        params: Partial<Params>;
        searchParams: Record<string, string | string[] | undefined>;
      }
    : {
        params: Partial<Record<string, string>>;
        searchParams: Record<string, string | string[] | undefined>;
      };
