import React, {useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "../css/carousel.css"
import {mpesa, cryptobtn, credit, paypal, one, two, three, four} from "../icons"
import toast from  "react-hot-toast"
import axios from "axios"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Modal } from "../Modal/Modal";
import { CopyToClipboardIcon } from "../Modal/CopyToClipboardIcon";
import { UnstoppableDomain } from "../Modal/UnstoppableDomain";



function HowItWorks() {
    const [open, setOpen] = useState(false);
    const [domain, setDomain] = useState("lalocommunities.crypto");
    const [records, setRecords] = useState([]);
  
    const showModal = () => {
      setOpen(!open);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {resolveRecord()},[])
    const data = [
        {
            icon: one,
            text: "Select the service you need (food and booze, transportation, groceries, Fx,dinner/lunch reservations)"
        },
        {
            icon: two,
            text: "Click on ‘Continue to chat’ and amessage will be sent via WhatsApp to The Diani App"
        },
        {
            icon: three,
            text: "The managing team will process the customer request for the requested service. "
        },
        {
            icon: four,
            text: "A delivery guy will be sent to the customer location with the delivery."
        }

    ]

    const formatAddress = (address) => {
        return `${address.substring(0, 6)}...${address.substring(
          address.length - 4
        )}`;
      };

    const resolveRecord = async () => {
        if (!domain) {
          toast.error("Please input your unstoppable domain e.g dianiapp.crypto");
          return;
        }
        try {
          const res = await axios.get(
            `https://unstoppabledomains.g.alchemy.com/domains/lalocommunities.crypto`,
            {
              headers: { Authorization: `Bearer qP8ISjG-2328Lc6eWQQGKJZtc-mJnjOT` },
            }
          );
          let items = Object.keys(res.data.records)
            .map((item) => {
              if (item.includes(".address")) {
                let key = item.split(".")[1];
                return { address: res.data.records[item], symbol: key };
              }
              return null;
            })
            .filter((i) => i);
    
          setRecords(items);
        } catch (error) {
          setRecords([]);
          return {};
        }
      };
  return (
    <div>
        <h2>How It Works</h2>
        <div className="how">
            {data.map((item, index) => (
                <div className="how-item">
                    <div className="how-component-small">{item.icon}</div>
                    <div className="how-component">{item.text}</div>
                </div>
            ))}
        </div>
        {/* <div className="carcon">
            <Carousel
                showThumbs={false}
                showStatus={false}
                indicator={({onClick, isSelected}) =>
                <span onClick={onClick} className={isSelected && 'selected'}>myDot</span>
                }
            >
                    <div className="carousel-container">
                        <h3>01</h3>
                        <p>Select the service you need (food and booze, transportation, groceries, Fx, dinner/lunch reservations</p>
                        <div className="carousel-flex">
                            <button className="back-btn">Back</button><button className="next-btn">Next</button>
                        </div>
                    </div>
                    <div className="carousel-container">
                    <h3>02</h3>
                        <p>Select the service you need (food and booze, transportation, groceries, Fx, dinner/lunch reservations</p>
                        <div className="carousel-flex">
                            <button className="back-btn">Back</button><button className="next-btn">Next</button>
                        </div>
                    </div>
                    <div className="carousel-container">
                    <h3>03</h3>
                        <p>Select the service you need (food and booze, transportation, groceries, Fx, dinner/lunch reservations</p>
                        <div className="carousel-flex">
                            <button className="back-btn">Back</button><button className="next-btn">Next</button>
                        </div>
                    </div>
            </Carousel>
        </div> */}
        <div>
            <h2>Payment Platforms</h2>
            <div className="payment-flex">
                <div className="payment-item">
                    {mpesa}<h4> Mpesa</h4>
                </div>
                <div className="payment-item">
                    {cryptobtn}
                    {!open ? (
              <button className="crypto-button" onClick={() => showModal()}>
                Crypto
              </button>
            ) : null}
                </div>
                <div className="payment-item">
                    {credit}<h4>Credit Cards </h4>
                </div>
                <div className="payment-item">
                    {paypal}<h4> Paypal</h4>
                </div>
            </div>
        </div>
        <Modal show={open} onClose={showModal} title="Resolve your domain">
        <p className="modal-description">
          Do you have an unstoppable domain? Please resolve it to get all your
          crypto asset address
        </p>

        <div className="unstoppable-domains-resolve">
          <div className="resolve">
            <input
              name="domain"
              disabled={true}
              value={domain}
              placeholder="brad.crypto"
              autoComplete={false}
              onChange={(e) => setDomain(e.target.value)}
            />
            <button disabled={true} onClick={(e) => resolveRecord()}>Submit</button>
          </div>
        </div>
        <div className="resolve-content">
          <div className="resolve-content-row">
            <h5 className="resolve-content-token">#</h5>
            <h5 className="resolve-content-token">SYMBOL</h5>
            <h5 className="resolve-content-address">ADDRESS</h5>
            <h5 className="resolve-content-address">COPY</h5>
          </div>

          {records.map((record, index) => (
            <div className="resolve-content-row" key={index}>
              <p className="resolve-content-token">{index + 1}.</p>
              <p className="resolve-content-token">{record.symbol}</p>
              <p className="resolve-content-address">
                {formatAddress(record.address)}
              </p>
              <p className="resolve-content-address">
                <CopyToClipboard
                  text={record.address}
                  onCopy={() => {
                    toast.success(
                      `copied ${record.symbol} address: ${formatAddress(
                        record.address
                      )}`
                    );
                  }}
                >
                  <button className="copy">
                    <CopyToClipboardIcon />
                  </button>
                </CopyToClipboard>
              </p>
            </div>
          ))}
        </div>

        <div className="resolve-poweredby">
          <p>Powered By: </p>
          <UnstoppableDomain />
        </div>
      </Modal>
    </div>
  )
}

export default HowItWorks