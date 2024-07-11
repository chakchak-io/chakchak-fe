export type CommonNextPageProps<Params = {}> =
  Params extends Record<string, string>
    ? {
        params: Params;
        searchParams: Record<string, string | string[] | undefined>;
      }
    : {
        params: Record<string, string>;
        searchParams: Record<string, string | string[] | undefined>;
      };
