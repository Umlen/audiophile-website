import Link from 'next/link';
import { type FunctionComponent } from 'react';
import { type LinkPropsType } from '@/types/types';
import typography from '@/styles/typography.module.scss';

const WhiteLink: FunctionComponent<LinkPropsType> = ({ href, text }) => {
  return (
    <Link href={href} className={`whiteLink ${typography.upperCaseBold13px}`}>
      {text}
    </Link>
  );
};

export default WhiteLink;
