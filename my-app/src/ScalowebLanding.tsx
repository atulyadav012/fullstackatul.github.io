import React from "react";

const Landing = () => {
  return (
    <div>

      {/* HERO */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Build & Scale Your Web Applications
          </h1>
          <p className="lead">
            18+ years combined experience in modern web development
          </p>
          <button className="btn btn-primary btn-lg">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Services</h2>
          <div className="row">
            {[
              "Web Development",
              "API Development",
              "Maintenance",
              "Optimization"
            ].map((item, i) => (
              <div className="col-md-3 mb-3" key={i}>
                <div className="card p-3 shadow-sm">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>About Us</h2>
          <p className="mt-3">
            Led by Atul Yadav (12+ yrs) and Sarita Yadav (6+ yrs),
            we build scalable and reliable web applications.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-5 text-center">
        <div className="container">
          <h2>Free Consultation</h2>
          <form className="mt-4">
            <input className="form-control mb-3" placeholder="Name" />
            <input className="form-control mb-3" placeholder="Email" />
            <textarea className="form-control mb-3" placeholder="Requirement"></textarea>
            <button className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Landing;