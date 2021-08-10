import { useEffect } from 'react';
import { Freezer } from '../libs/Freezer';
import '../styles/main.scss';
import { Provider } from 'react-redux';
import { rootReducer } from '../redux/rootReducer';
import { createStore } from 'redux';
import { setFaforiteItems } from '../redux/actions';

const store = createStore(rootReducer);
let vh;

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Freezer();
        vh = window.innerHeight * 0.01;
        window.addEventListener('resize', initHeight)
        initState()
    },[])
    function initState(){
        const favorites = localStorage.favoriteItems;
        if(favorites){
            store.dispatch(setFaforiteItems(JSON.parse(favorites)));
        }
    }
    function initHeight(){
        vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}