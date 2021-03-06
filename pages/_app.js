import { useEffect, useState } from "react";
import { Freezer } from "../libs/Freezer";
import "../styles/main.scss";
import { Provider } from "react-redux";
import { rootReducer } from "../redux/rootReducer";
import { createStore } from "redux";
import { setFaforiteItems } from "../redux/actions";
import { setComparisonItems } from "../redux/actions";
import Head from "next/head";
import faviconImg from "../media/favicon.ico";
import { config } from "../config";
import { useRouter } from "next/router";

const store = createStore(rootReducer);
let vh;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.asPath);
  const [prevPath, setPrevPath] = useState(undefined);

  useEffect(() => {
    Freezer();
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh-init", `${vh}px`);
    window.addEventListener("resize", initHeight);
    router.events.on("routeChangeComplete", setCurrentPath);
    initState();
    initYM();
    initGM();
  }, []);
  useEffect(() => {
    if (prevPath) {
      if (currentPath !== prevPath) {
        ym(config.metrikaId, "hit", location.href);
      }
    }
    setPrevPath(currentPath);
  }, [currentPath]);
  function initState() {
    const favorites = localStorage.favoriteItems;
    const comparison = localStorage.comparisonItems;
    if (favorites) {
      store.dispatch(setFaforiteItems(JSON.parse(favorites)));
    }
    if (comparison) {
      store.dispatch(setComparisonItems(JSON.parse(comparison)));
    }
  }
  function initHeight() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  return (
    <Provider store={store}>
      <Head>
        <title>DogClick</title>
        <link rel="shortcut icon" href={faviconImg.src} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.gMetrikaId}`}
        ></script>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

function initYM() {
  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    (k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(config.metrikaId, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}
function initGM() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", config.gMetrikaId);
}
