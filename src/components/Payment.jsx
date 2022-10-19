import React from "react";
import { mpesanew, crypto, credit, paypal, kes } from "./icons";
import "./css/Payment.css";
const Payment = () => {
  return (
    <div className="Payment-container">
      <h5 style={{fontSize:"0.6em"}}>We Accept :<br/> </h5> &nbsp;&nbsp;&nbsp; {kes} &nbsp; {credit} &nbsp; {mpesanew}  &nbsp; {crypto}  &nbsp; {paypal}
    </div>
  );
};

export default Payment;
 