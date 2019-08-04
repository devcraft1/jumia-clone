import React, { Component } from "react";
import "./profile.css";
import { Divider } from "@material-ui/core";

class Profilefooter extends Component {
  render() {
    return (
      <div className="Line">
        <div className="LineOne">
          LET US HELP YOU
          <h5>
            Help Center<br />
            Contact us<br />
            How to shop on Jumia?<br />
            Delivery options and timelines<br />
            How to return a product on Jumia?<br />
            Corporate and bulk purchases<br />
            Jumia Bot (Beta version)
          </h5>
          <br />
          JOIN US ON
          <br />
          <div className="Picture">
            <img
              className="Images"
              src="/pics/FaceBookLogo (copy).png"
              width="15%"
              height="10%"
              alt="image"
            />
            <img
              className="Images"
              src="/pics/TwitterLogo (copy).png"
              width="8%"
              height="10%"
              alt="image"
            />
            <img
              className="Images"
              src="/pics/UTubeLogo (copy).png"
              width="12%"
              height="10%"
              alt="image"
            />
            <img
              className="Images"
              src="/pics/ChartLogo (copy).png"
              width="8%"
              height="10%"
              alt="image"
            />
            <img
              className="Images"
              src="/pics/InstagramLogo (copy).png"
              width="8%"
              height="10%"
              alt="image"
            />
            <img
              className="Images"
              src="/pics/TwitterLogo (copy).png"
              width="8%"
              height="10%"
              alt="image"
            />
          </div>
        </div>

        <div className="LineTwo">
          ABOUT JUMIA
          <h5>
            About us<br />
            Jumia careers<br />
            Jumia Express<br />
            Jumia Global<br />
            Terms and Conditions<br />
            Privacy policy<br />
            Ramadan Shop<br />
            Mobile Week<br />
          </h5>
          <br />
          CONTACT US
          <br />
          <br />
          <br />
          01 888 1100/ 0700 600 0000
        </div>

        <div className="LineThree">
          {" "}
          MAKE MONEY WITH JUMIA
          <h5>
            Sell on Jumia<br />
            Become an Affiliate Partner<br />
            Become a Sales Consultant<br />
            Become a Jumia Vendor Service Provider<br />
          </h5>
          <br />
          <br />
          <h5>PAYMENT METHODS & DELIVERY PARTNERS</h5>
          <div>
            <img
              className="Images2"
              src="/pics/JumiaLogo2 (copy).jpg"
              width="20%"
              height="10%"
              alt="image"
            />
            <img
              className="Images2"
              src="/pics/Master (copy).png"
              width="15%"
              height="10%"
              alt="image"
            />
            <img
              className="Images2"
              src="/pics/VisaMaster (copy).png"
              width="20%"
              height="10%"
              alt="image"
            />
            <img
              className="Images2"
              src="/pics/Verve (copy).jpg"
              width="10%"
              height="10%"
              alt="image"
            />
          </div>
        </div>

        <div className="LineFour">
          JUMIA INTERNATIONAL
          <h5>
            Algeria_____Morocco<br />
            Cameroon____Senegal<br />
            Egypt_______Tanzania<br />
            Ghana_______Tunisia<br />
            Ivory Coast___Uganda<br />
            Kenya
          </h5>
          <br />
          <br /> <br />
          <br />
          <br />
          <div>
            <img
              className="Images3"
              src="/pics/Mcash (copy).png"
              width="25%"
              height="10%"
              alt="image"
            />
            <img
              className="Images3"
              src="/pics/QuickTeller (copy).png"
              width="30%"
              height="10%"
              alt="image"
            />
            <img
              className="Images3"
              src="/pics/DHL1 (copy).png"
              width="15%"
              height="10%"
              alt="image"
            />
            <img
              className="Images3"
              src="/pics/Max (copy).png"
              width="10%"
              height="10%"
              alt="image"
            />
          </div>
        </div>
        <div className="mfooter">
          <div className="mobilefooter">
            <li className="mobileli">
              <a href="#" className="nomoreli2">
                CONTACT
              </a>
            </li>
            <li className="mobileli">
              <a href="#" className="nomoreli2">
                HELP
              </a>
            </li>
            <li className="mobileli">
              <a href="#" className="nomoreli2">
                CONDITIONS
              </a>
            </li>
            <li className="mobileli">
              <a href="#" className="nomoreli2">
                BECOME A SELLER
              </a>
            </li>
          </div>
          <div className="lfooter">
            <p className="mobileli">
              <a href="#" className="nomoreli3">
                All Rights Reserved
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profilefooter;
