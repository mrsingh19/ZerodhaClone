import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appstore,
}) {
  return (
    <div className="container border-top">
      <div className="row mt-5 pe-0  p-3">
        <div className="col-7 p-1">
          <img src={imageURL} alt="kite" style={{ width: "95%" }}></img>
        </div>
        <div className="col-5 p-3 mt-5 ps-5  ">
          <h1>{productName}</h1>
          <p className="fs-5 text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} className="fs-5 text-decoration-none ">
              Try Demo <i class="fs-5 fa-solid fa-arrow-right-long"></i>{" "}
            </a>
            <a
              href={learnMore}
              className="fs-5 text-decoration-none ps-5 "
              style={{ marginLeft: "50px" }}
            >
              Learn More <i class="fs-5 fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              {" "}
              <img
                src="media/images/googlePlayBadge.svg"
                alt="playstore"
                style={{ width: "40%" }}
              />
            </a>
            <a href={appstore} style={{ marginLeft: "40px" }}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="appstore"
                style={{ width: "40%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
