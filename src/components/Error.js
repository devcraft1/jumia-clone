import React, { Component } from "react";
import "./error.css";

class Error extends Component {
  render() {
    return (
      <div>
        <div className="ErrorGeneral">
          <div className="ErrorHeader">
            <h3 className="ErrorJumiaOne">
              JUMIA
              <img
                className="image-star"
                src="/pics/star-icon (copy).png"
                alt="Icon"
              />
              ONE
            </h3>
            <input
              className="ErrorInput"
              type="text"
              placeholder="Login in to see you Wallet balance"
            />
          </div>

          <div className="ErrorBody">
            <h1 className="ErrorFour">404</h1>
            <br />
            <br />
            <br />
            <h7>This page could not be found</h7>
            <br />
            <br />
            <br />
            <h7 className="ErrorBackHome">
              <a href="/">Click here to go back to home page</a>
            </h7>
          </div>

          <div className="ErrorFoot">
            <div classNameErrorFoot1>
              <h3 className="ErrorJumiaOne">
                JUMIA
                <img
                  className="image-star"
                  src="/pics/star-icon (copy).png"
                  alt="Icon"
                />
                ONE
              </h3>
              <h3>The first all-in-one lifestyle App</h3>
            </div>

            <div className="ErrorFoot2">
              <div className="ErrorFoot2A">
                <div className="ErrorFoot2A1">
                  <img
                    className="Image1"
                    src="/pics/G-icon (copy).png"
                    alt="Icon"
                  />
                  <img
                    className="Image2"
                    src="/pics/A-icon (copy).png"
                    alt="Icon"
                  />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
