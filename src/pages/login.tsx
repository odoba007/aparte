import React from "react";

export default function Login() {

  const appendScript1 = () => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js'
    document.body.append(script)
  };
  const appendScript2 = () => {
    const script = document.createElement('script')
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
    document.body.append(script)
  };

  React.useEffect(() => {
    appendScript1();
    appendScript2();
  }, []);

  const house_prop = [
    {
      price:"3,150",
      location:"2000 Rydal Cir, Roseville, CA 95747",
      bed:"3",
      bath:"3",
      feet:"1,621"
    },
    {
      price:"3,195",
      location:"483 Sturtevant Dr, Sierra Madre, CA 91024",
      bed:"1",
      bath:"1",
      feet:"--"
    },
    {
      price:"2,983",
      location:"642 Field Maple Pl, San Jacinto, CA 92583",
      bed:"3",
      bath:"2",
      feet:"1,576"
    },
    {
      price:"2,595",
      location:"2151 Prairie Town Way, Roseville, CA 95747",
      bed:"2",
      bath:"2",
      feet:"945"
    },
    {
      price:"3,520",
      location:"1775 W Highland Ave, San Bernardino, CA 92411",
      bed:"3",
      bath:"3",
      feet:"1,598"
    },
    {
      price:"3,500",
      location:"810 S Lucerne Blvd APT 201, Los Angeles, CA 90005",
      bed:"2",
      bath:"2",
      feet:"1,140"
    },
    {
      price:"966",
      location:"250 Truman St, Coalinga, CA 93210",
      bed:"2",
      bath:"2",
      feet:"906"
    },
    {
      price:"1,405",
      location:"855 N Dobson Rd, Chandler, AZ 85224",
      bed:"1",
      bath:"1",
      feet:"613"
    },
    {
      price:"2,095",
      location:"4285 W Denali Ln, Phoenix, AZ 85087",
      bed:"2",
      bath:"3",
      feet:"1,392"
    }
  ]

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Property Listing</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                  rebum.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Featured
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    For Sell
                  </a>
                </li>
                <li className="nav-item me-0">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    For Rent
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">

                {
                  [1,2,3,4,5,6,7,8,9].map((value, key)=>(
                    <div
                    key={key}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href={`/property?apartment=${value}#apart-tab`}>
                        <img
                          className="img-fluid"
                          src={`img/aparte-${value}/1.webp`}
                          alt=""
                        />
                      </a>
                     
                     
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">${house_prop[key].price}</h5>
                      
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                        {house_prop[key].location}
                      </p>
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{house_prop[key].feet} Sqft</small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2"></i>{house_prop[key].bed} Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2"></i>{house_prop[key].bath} Bath
                      </small>
                    </div>
                  </div>
                </div>
                  ))
                }
                
              
               
                
              </div>
            </div>
          
          </div>
        </div>
      </div>


      {/* <!-- Call to Action Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                   
                                </div>
                                <a href="https://wa.link/z12cbp" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</a>
                                <a href="https://wa.link/z12cbp" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Reserve an apartment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to Action End --> */}
    </>
  );
}
