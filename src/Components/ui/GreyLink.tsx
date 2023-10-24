import Link from 'next/link';
import { type FunctionComponent } from 'react';
import { type LinkPropsType } from '@/types/types';
import typography from '@/styles/typography.module.scss';

const GreyLink: FunctionComponent<LinkPropsType> = ({ href, text }) => {
  return (
    <Link href={href} className={`blackLink goBackLink ${typography.baseText}`}>
      {text}
    </Link>
  );
};

export default GreyLink;
