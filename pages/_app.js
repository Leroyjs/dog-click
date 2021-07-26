import { useEffect } from 'react';
import { Freezer } from '../libs/Freezer';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Freezer();
        console.log('ffff');
    },[])
    return <Component {...pageProps} />;
}
