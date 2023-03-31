import 'normalize.css';
import { Manrope } from 'next/font/google';
import '@/styles/global.scss';

const manrope = Manrope({ subsets: ['latin'] });

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;