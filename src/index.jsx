import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./registerServiceWorker";
import PWAPrompt from "react-ios-pwa-prompt";
<<<<<<< HEAD
// import "@rainbow-me/rainbowkit/styles.css";
// import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
=======
>>>>>>> 0d3dcdbcc40a8723fbdd7800fecf69c9080e865d
import reportWebVitals from "./reportWebVitals";
import ReactPwa from "react-pwa-app";
import { ClearBrowserCacheBoundary } from "react-clear-browser-cache";
import {CookiesProvider} from "react-cookie"
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function getLibrary(provider){
  return new Web3Provider(provider);
}

// const { chains, provider, webSocketProvider } = configureChains(
//   [
//     chain.mainnet,
//     // chain.polygon,
//     // chain.optimism,
//     // chain.arbitrum,
//     // ...(process.env.REACT_APP_ENABLE_TESTNETS === "true"
//     //   ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
//     //   : []),
//   ],
//   [
//     alchemyProvider({ apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
//     publicProvider(),
//   ]
// );



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
// const options = {
//   // you can also just use 'bottom center'
//   position: positions.TOP_CENTER,
//   timeout: 5000,
//   offset: '30px',
//   // you can also just use 'scale'
//   transition: transitions.SCALE,
//   width:"auto",
//   padding:"10px"
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
     
          <ReactPwa
            test //is to install in localhost, not required
            config={{
              swUrl: "/service-worker.js", // sw file in public default is service-worker.js
              onUpdate: (reg) => {
                // alert("sw cache was updated");
                console.log(reg);
              },
              onSuccess: (reg) => {
                // alert("sw success installed");
                console.log(reg);
              },
              onError: (reg) => {
                // alert("sw error to install");
                console.log(reg);
              },
              onPrompt: (e) => {
                if (e.outcome === "accepted") {
                  console.log("user click on install and accept");
                }
                if (e.outcome === "dismissed") {
                  console.log("user click on install and refuse");
                }
              },
            }}
          >
            <ErrorBoundary>
              <ClearBrowserCacheBoundary>
                <CookiesProvider>
                  <Web3ReactProvider getLibrary={getLibrary}>
                    {/* <AlertProvider template={AlertTemplate} {...options}> */}
                      <App />
                    {/* </AlertProvider> */}
                  </Web3ReactProvider>
                </CookiesProvider>
                <PWAPrompt
                  promptOnVisit={2}
                  timesToShow={300}
                  copyClosePrompt="Close"
                  permanentlyHideOnDismiss={false}
                  delay={1000}
                />
              </ClearBrowserCacheBoundary>
            </ErrorBoundary>
          </ReactPwa>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
serviceWorker.register();
