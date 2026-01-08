import React from "react";

function Team() {
  return (
    <div className="row p-5  ">
      <h1 className=" text-center mb-5 mt-5">People</h1>
      <div className="col-6 p-5 text-center">
        <img
          src="media/images/nithinkamath.jpg"
          alt="nitin"
          style={{ borderRadius: "100%", width: "70%" }}
        ></img>
        <h4 className="mt-5">Nithin Kamath</h4>
        <h6>Founder, CEO</h6>
      </div>

      <div className=" text-muted  fs-4  col-6 p-5">
        <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.
        </p>
        <p>
          {" "}
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
          and the Market Data Advisory Committee (MDAC).
        </p>
        <p> Playing basketball is his</p>
        <p>
          zen. Connect on{" "}
          <a href="#" className="text-decoration-none">
            Homepage
          </a>{" "}
          /{" "}
          <a href="#" className="text-decoration-none">
            TradingQnA
          </a>{" "}
          /
          <a href="#" className="text-decoration-none">
            Twitter
          </a>
          ;
        </p>
      </div>
    </div>
  );
}

export default Team;
