import { useEffect } from 'react';
import { Freezer } from '../libs/Freezer';
import '../styles/main.scss';
import { Provider } from 'react-redux';
import { rootReducer } from '../redux/rootReducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Freezer();
    },[])

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}