import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 p-0">
      <div className="row ">
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg" alt="imwage"></img>
          <h1 className=" text-center">Free equity delivery</h1>
          <p className=" text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className=" col-4 p-5">
          <img src="media/images/intraday.svg" alt="iwmage"></img>
          <h1 className=" text-center">Intraday and F&O trades</h1>
          <p className=" text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg" alt="imqage"></img>
          <h1 className=" text-center">Free direct MF</h1>
          <p className=" text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="row">
        <h2>Charges explained</h2>
        <div className="col-6"></div>
        <div className="col-6"></div>
        <h5>Disclaimer</h5>
        <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
    </div>
  );
}

export default Brokerage;
