import Link from 'next/link';
import { forwardRef, Ref } from 'react';

import { AccessibleRoute } from '@/const/router';
import type { ExtractRefFromProps, PropsFromWithoutRef } from '@/lib/react-typescript';

type LinkElement = ExtractRefFromProps<typeof Link>;
type LinkProps = Omit<PropsFromWithoutRef<typeof Link>, 'href'> & { href: AccessibleRoute };

const Component = (props: LinkProps, forwardedRef: Ref<LinkElement>) => {
  const { href, ...rest } = props;
  return <Link {...rest} href={href} ref={forwardedRef} />;
};

const ForwardedTypedLink = forwardRef(Component);

export const TypedLink = ForwardedTypedLink;
