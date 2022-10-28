import { createContext, useState } from "react";

const WalletContext = createContext({
  address: "",
  provider: null,
  isConnected: false,
});

const WalletProvider = ({ children }) => {
  const [walletState, setWalletState] = useState({
    address: "",
    provider: null,
    isConnected: false,
  });

  const updateWallet = (wallet) => {
    setWalletState({ ...wallet });
  };

  return (
    <WalletContext.Provider value={{ ...walletState, updateWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
