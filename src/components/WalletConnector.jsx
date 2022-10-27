import React, { useState } from "react";
import {
  interractive,
  message,
  walletconnectionsmall,
  profile,
  wifi,
  messagetemplate,
  lalologo,
  closevg,
  accounttemplate,
} from "./icons";
import "./css/walletModal.css";
import ReactWhatsapp from "react-whatsapp";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import { ConnectButton } from '@rainbow-me/rainbowkit';

// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import {WalletConnectConnector} from '@web3-react/walletconnect-connector';
// import {InjectedConnector} from '@web3-react/injected-connector';
// import { useWeb3React } from '@web3-react/core'

// const CoinbaseWallet = new WalletLinkConnector({
//  url: `https://mainnet.infura.io/v3/5ef8165ab6174ab980c609a75024165b`,
//  appName: "Web3-react Demo",
//  supportedChainIds: [1, 3, 4, 5, 42],
// });

// const WalletConnect = new WalletConnectConnector({
//  rpcUrl: `https://mainnet.infura.io/v3/5ef8165ab6174ab980c609a75024165b`,
//  bridge: "https://bridge.walletconnect.org",
//  qrcode: true,
// });

// const Injected = new InjectedConnector({
//  supportedChainIds: [1, 3, 4, 5, 42]
// });


const InterractiveSection = () => {
  const [open, setOpen] = useState(false);
  // const { activate, deactivate } = useWeb3React();
  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <>
      <div className="main-connect">
        <button className="connection-btn" onClick={() => setOpen(true)}>
          {interractive}
        </button>
        {open === true ? (
          //  <Popup position="bottom right" lockScroll={true} arrow={false} className="inerract" keepTooltipInside={true} >
          <div className="chat-box">
            <div className="logo-top-con">
              <h3>Lalo Interactive</h3>
              <div className="logowrap">{lalologo}</div>
            </div>
            <Tabs className="transit">
              <TabPanel className="transition">
                <div className="message-wifi">
                  <ReactWhatsapp
                    number={"+254115144146"}
                    message={"Hi DianiApp 😊"}
                    className="nothing"
                  >
                    {messagetemplate}
                  </ReactWhatsapp>
                </div>
              </TabPanel>
              <TabPanel className="transition" style={{ justifyContent: "center"}} >
                <div style={{marginTop:"70px", display:"flex", flexDirection:"row"}}>
                  <ConnectButton/>
                  {/* <button onClick={() => { activate(CoinbaseWallet) }} style={{color:"#fff", background:"navy", padding:'10px',borderRadius:"5px"}}>Coinbase Wallet</button>
                  <button onClick={() => { activate(WalletConnect) }} style={{color:"#fff", background:"navy", padding:'10px',borderRadius:"5px"}}>Wallet Connect</button> */}
                  {/* <button onClick={() => { activate(Injected) }} style={{color:"#fff", background:"navy", padding:'10px',borderRadius:"5px"}}>Metamask</button> */}
                </div>
              </TabPanel>
              <TabPanel className="transition" style={{ justifyContent: "center"}}>
              <h3 style={{ color: "#000", fontWeight: "bold", marginTop:"50px", fontSize:"0.8em"  }}>
                  Profile creation coming soon
                </h3>
              </TabPanel>
              <TabPanel className="transition" style={{ justifyContent: "center"}}>
                <h3 style={{ color: "#000", fontWeight: "bold", marginTop:"50px", fontSize:"0.8em"  }}>
                  Free wifi coming soon
                </h3>
              </TabPanel>
              <TabList className="icons-flex">
                <Tab>{message}</Tab>
                <Tab>
                  <div>{walletconnectionsmall}</div>
                </Tab>
                <Tab>{profile}</Tab>
                <Tab>{wifi}</Tab>
                {/* <Tab style={{position:"absolute", right:"3vw", bottom: "11vh", zIndex:100, width:"50px", height:"50px"}}>{walletconnectionsmall}</Tab>
                <Tab style={{position:"absolute", right:"3vw", bottom: "18vh", zIndex:100, width:"50px", height:"50px"}}>{walletconnectionsmall}</Tab> */}
                <div onClick={() => handleClick()}>
                  <div>{closevg}</div>
                </div>
              </TabList>
            </Tabs>
          </div>
        ) : // </Popup>
        null}
      </div>
    </>
  );
};

export default InterractiveSection;
