import React from 'react'

function PricingPlan() {
  return (
    <section
    className="pricing pb_120 xs_pb_80"
    style={{background: "url(images/golden_bg.jpg)"}}
  >
    <div className="section_heading section_heading_2">
      <div className="container-fluid">
        <h2>PRICING PLAN <span>PRICING PLAN</span> PRICING PLAN</h2>
      </div>
    </div>
    <div className="container pt_95 xs_pt_55">
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div className="single_pricing fade_left">
            <h4>Sliver Pack</h4>
            <h2>$100.00</h2>
            <span>Per/Month</span>
            <p>
              Duis aute irure dolor in reprehenderit velit esse cillum dolore
              eu fugiat
            </p>
            <a className="common_btn btn_hover" href="#">Start My Project Now</a>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="single_pricing active fade_left">
            <h4>Gold Pack</h4>
            <h2>$150.00</h2>
            <span>Per/Month</span>
            <p>
              Duis aute irure dolor in reprehenderit velit esse cillum dolore
              eu fugiat
            </p>
            <a className="common_btn btn_hover price_btn" href="#"
              >Start My Project Now</a
            >
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="single_pricing fade_left">
            <h4>Platinum Pack</h4>
            <h2>$250.00</h2>
            <span>Per/Month</span>
            <p>
              Duis aute irure dolor in reprehenderit velit esse cillum dolore
              eu fugiat
            </p>
            <a className="common_btn btn_hover" href="#">Start My Project Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingPlan
