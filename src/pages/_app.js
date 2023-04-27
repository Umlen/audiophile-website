import 'normalize.css';
import { Manrope } from 'next/font/google';
import '@/styles/global.scss';

const manrope = Manrope({ subsets: ['latin'] });

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${manrope.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default App;