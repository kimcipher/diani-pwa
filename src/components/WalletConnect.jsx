import React, { useState } from "react";
import { interractive, message, walletconnectionsmall, profile, wifi, messagetemplate, lalologo, closevg, connecttemplate, accounttemplate } from "./icons";
import "./css/walletModal.css";
import Popup from 'reactjs-popup';
import ReactWhatsapp from "react-whatsapp";
import {Tab, Tabs, TabPanel, TabList } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';

function WalletConnect() {
  const [ setCurrentAccount] = useState("");
  // const checkIfWalletIsConnected = async () => {
  //   try {
  //     const { ethereum } = window;
  //     if (!ethereum) {
  //       console.log("Make sure you have metamask");
  //     } else {
  //       console.log("We have the ethereum object", ethereum);
  //     }

  //     const accounts = await ethereum.request({ method: "eth_accounts" });

  //     if (accounts.length !== 0) {
  //       const account = accounts[0];
  //       console.log("Found and authorized account : ", account);
  //       setCurrentAccount(account);
  //     } else {
  //       console.log("No authorized account available");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="main-connect">
      <Popup trigger={<button className="connection-btn">{interractive}</button>} position="bottom right" lockScroll={true} arrow={false} className="inerract" keepTooltipInside={true} >
        <div className="chat-box">
            <div className="logo-top-con">
                <h3>Lalo Interactive</h3><div className="logowrap">{lalologo}</div>
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
                    {wifi}
                </div>
              </TabPanel>
              <TabPanel className="transition" onClick={connectWallet}>{connecttemplate} {wifi}</TabPanel>
              <TabPanel className="transition">{accounttemplate} {wifi} </TabPanel>
              <TabPanel className="transition"><h3 style={{color:"#000", fontWeight:"bold"}}>Tap outside the modal to close</h3></TabPanel>
              <TabList className="icons-flex">
                  <Tab>{message}</Tab> <Tab><div>{walletconnectionsmall}</div></Tab><Tab>{profile}</Tab> <Tab><div>{closevg}</div></Tab>
              </TabList>
            </Tabs>
        </div>
      </Popup>
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
}

export default WalletConnect;
