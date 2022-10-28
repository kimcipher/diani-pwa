import UAuthBncOnboard from "@uauth/bnc-onboard";
import initOnboard from "bnc-onboard";
import React, { useEffect, useMemo, useState } from "react";
import {
  INFURA_ID,
  UNSTOPPABLE_CLIENT_API,
  BNC_ONBOARD,
  REDIRECT_URL,
} from "./constants";

const uauthOnboard = new UAuthBncOnboard({
  clientID: UNSTOPPABLE_CLIENT_API,
  redirectUri: REDIRECT_URL,
  scope: "openid wallet",
});

const uauthWalletModule = uauthOnboard.module({
  preferred: true,
  walletconnect: {
    infuraId: INFURA_ID,
  },
});

const ConnectWalet = () => {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState("");

  const onboard = useMemo(
    () =>
      initOnboard({
        dappId: BNC_ONBOARD,
        networkId: 1,
        walletSelect: {
          wallets: [
            { walletName: "metamask", preferred: true },
            {
              walletName: "walletConnect",
              preferred: true,
              infuraKey: INFURA_ID,
            },
            uauthWalletModule,
            { walletName: "opera" },
            { walletName: "operaTouch" },
          ],
        },
        subscriptions: {
          address: setAddress,
          wallet: (wallet) => {
            if (wallet) {
              window.localStorage.setItem("selectedWallet", wallet.name);
            }

            setWallet(wallet);
          },
        },
        darkMode: true,
      }),
    []
  );

  useEffect(() => {
    console.log("Fetch: ..............");
    const previouslySelectedWallet =
      window.localStorage.getItem("selectedWallet");
    if (previouslySelectedWallet != null) {
      if (previouslySelectedWallet === "Unstoppable") {
        uauthOnboard
          .getUAuth()
          .then(async (uauth) => {
            await uauth.user();
            await onboard.walletSelect("Unstoppable");
          })
          .catch(() => {
            window.localStorage.removeItem("selectedWallet");
          });
      } else {
        onboard.walletSelect(previouslySelectedWallet);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConnect = async () => {
    try {
      await onboard.walletSelect();
      await onboard.walletCheck();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    if (wallet.name === "Unstoppable") {
      uauthOnboard.getUAuth().then((uauth) => uauth.logout());
    }
    onboard.walletReset();
  };

  if (address) {
    console.log("wallet:", wallet);
    return (
      <>
        <div>Connected to {address}</div>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  return (
    <button
      onClick={handleConnect}
      style={{
        color: "#fff",
        backgroundColor: "#2A2F45",
        borderRadius: "0.5rem",
        padding: "0.90",
      }}
    >
      Connect
    </button>
  );
};

export default ConnectWalet;
