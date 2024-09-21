export default function Testimonial() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>

            
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                The experience was seamless from start to finish! The team helped me find my dream home in no time, and their attention to detail was top-notch. I couldn't have asked for a better guide through the buying process.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="img/testimonial-1.jpg"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Linda Rodriguez</h6>
                    <small>Nurse Practitioner</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                I was new to the city and didn't know where to start. They listened to my needs, found me the perfect rental, and made me feel at home right away. Truly a five-star service!
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="img/testimonial-2.jpg"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Michael Johnson</h6>
                    <small>Software Engineer</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                I was impressed by the team’s expertise and commitment. They found me a commercial space that fit all my business needs perfectly. I’m looking forward to growing my business here.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="img/testimonial-3.jpg"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">David Williams</h6>
                    <small>Marketing Manager</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
