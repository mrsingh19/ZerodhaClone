import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row  text-center">
        <h1 className="mt-5 text-muted fw-solid">The Zerodha Universe</h1>
        <p className="mt-3 fs-4 text-muted fw-medium">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5">
          <img
            style={{ width: "70%" }}
            src="media/images/zerodhaFundhouse.png"
            alt="logos"
          ></img>
          <p className="text-muted mt-4 text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            style={{ width: "90%" }}
            src="media/images/sensibullLogo.svg"
            alt="logos"
          ></img>
          <p className="text-muted mt-4 text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            style={{ width: "59%" }}
            src="media/images/tijori.svg"
            alt="logos"
          ></img>

          <p className="text-muted  text-small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.{" "}
          </p>
        </div>

        <div className="col-4 mt-5  ">
          <img
            style={{ width: "55%" }}
            src="media/images/streakLogo.png"
            alt="logos"
          ></img>
          <p className="text-muted mt-1 text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            style={{ width: "70%" }}
            src="media/images/smallcaseLogo.png"
            alt="logos"
          ></img>
          <p className="text-muted mt-1 text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            style={{ width: "50%" }}
            src="media/images/dittoLogo.png"
            alt="logos"
          ></img>
          <p className="text-muted mt-1 text-small">
            {" "}
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="  p-3 mb-5  mt-5 btn btn-primary fs-4"
          style={{ width: "30%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
