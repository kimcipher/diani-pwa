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

const WalletConnector = () => {
  const [open, setOpen] = useState(false);
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
                <div style={{marginTop:"70px"}}>
                  <ConnectButton/> 
                </div>
              </TabPanel>
              <TabPanel className="transition">
                {accounttemplate} 
              </TabPanel>
              <TabPanel className="transition" style={{ justifyContent: "center"}}>
                <h3 style={{ color: "#000", fontWeight: "bold", marginTop:"50px", fontSize:"0.8em"  }}>
                  Free WIFI is only available at these locations
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

        {/* <div className="main-connect">
            {!currentAccount &&,  (
            <div className="main-icon" onClick={connectWallet}>
              {walletconnecticon}
            </div>
             )}
        </div> */}
      </div>
    </>
  );
};

export default WalletConnector;
