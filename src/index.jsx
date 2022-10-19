import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./registerServiceWorker";
import PWAPrompt from "react-ios-pwa-prompt";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import reportWebVitals from "./reportWebVitals";
import ReactPwa from "react-pwa-app";
import { ClearBrowserCacheBoundary } from "react-clear-browser-cache";
import {CookiesProvider} from "react-cookie"
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider){
  return new Web3Provider(provider);
}

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    // chain.polygon,
    // chain.optimism,
    // chain.arbitrum,
    // ...(process.env.REACT_APP_ENABLE_TESTNETS === "true"
    //   ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
    //   : []),
  ],
  [
    alchemyProvider({ apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit demo",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
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
                    <App />
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
        </RainbowKitProvider>
      </WagmiConfig>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
serviceWorker.register();
