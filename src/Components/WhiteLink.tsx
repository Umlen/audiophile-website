import { FunctionComponent } from 'react';
import Link from "next/link";
import typography from '@/styles/typography.module.scss';

type WhiteLinkProps = {
  href: string;
  text: string;
};

const WhiteLink: FunctionComponent<WhiteLinkProps> = ( {href, text} ) => {
  return (
    <Link href={href} className={`whiteLink ${typography.upperCaseBold13px}`}>
      {text}
    </Link>
  );
};

export default WhiteLink;
