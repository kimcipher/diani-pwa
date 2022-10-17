import React from "react";
import "./css/pop.css";
import { ExternalLink } from "react-external-link";
import logo from "./assets/logo.png";

const Pop = ({ setIsOpen }) => {
  return (
    <div className="main-pop">
      <div className="popup-main">
        <div className="Logo-container">
          <img src={logo} alt="Dianiapp" />
        </div>

        <h4 className="spec"> Call/text:</h4>
        <div className="contacts">
          <ExternalLink href="tel:+254728765987">
            📞 +254 728765987
          </ExternalLink>
        </div>
        <h4> Email:</h4>
        <div className="contacts">
          <ExternalLink href="mailto:help@dianiapp.com">
            📩 help@dianiapp.com
          </ExternalLink>
        </div>
        <div className="close">
          <button onClick={() => setIsOpen(false)} className="Button-container">
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pop;
