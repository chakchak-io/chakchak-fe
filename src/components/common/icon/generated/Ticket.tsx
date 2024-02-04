import { Ref, forwardRef, memo } from 'react';

import { PropsFrom } from '@/lib/react-typescript';

import Ticket from '../svg/ticket.svg';

type Props = PropsFrom<typeof Ticket>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
export const SVGTicket = (props: Props, ref: Ref<PropRef>) => <Ticket {...props} ref={ref} />;
const Forwarded = forwardRef(SVGTicket);
const Memo = memo(Forwarded);

export default Memo;
