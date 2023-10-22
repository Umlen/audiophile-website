import Link from "next/link";
import { FunctionComponent } from 'react';
import { LinkPropsType } from '@/types/types';
import typography from '@/styles/typography.module.scss';

const WhiteLink: FunctionComponent<LinkPropsType> = ( {href, text} ) => {
  return (
    <Link 
      href={href} 
      className={`whiteLink ${typography.upperCaseBold13px}`}
    >
      {text}
    </Link>
  );
};

export default WhiteLink;
