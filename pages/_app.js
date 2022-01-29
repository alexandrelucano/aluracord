// import App from 'next/app'
import appConfig from '../config.json';
//TODO Fazer o hover

function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px ${appConfig.theme.colors.neutrals['008']};
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${appConfig.theme.colors.primary[505]};
          border-radius: 10px;
        }
      `}</style>
    );
}

function MyApp({ Component, pageProps }) {
    return (
        <><GlobalStyle /><Component {...pageProps} /></>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp