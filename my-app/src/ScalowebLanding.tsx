import React from "react";

const Landing = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero">
            {/* LOGO PLACEHOLDER */}
            <span className="text-primary">Scalo</span>Web
          </a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#blogs">Blogs</a></li>
              <li className="nav-item"><a className="nav-link" href="#faqs">FAQs</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="bg-dark text-white d-flex align-items-center" style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">
            We Build Scalable, High-Performance Web Applications
          </h1>
          <p className="lead mb-4">
            18+ years combined experience delivering enterprise-grade solutions
          </p>
          <button className="btn btn-primary btn-lg px-4">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Our Services</h2>
          <div className="row g-4">
            {[
              { title: "Web Development", desc: "Modern React, Angular, Blazor apps" },
              { title: "API Development", desc: "Robust .NET Core APIs" },
              { title: "Maintenance", desc: "Reliable long-term support" },
              { title: "Optimization", desc: "Performance & scalability tuning" }
            ].map((item, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">About Us</h2>
              <p className="mt-3 text-muted">
                Led by Atul Yadav (12+ years) and Sarita Yadav (6+ years),
                we specialize in building scalable, secure, and maintainable
                web applications using modern technologies.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="p-5 bg-white shadow-sm rounded-4">
                <h3 className="fw-bold text-primary">18+ Years</h3>
                <p className="text-muted">Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Blogs</h2>
          <div className="row g-4">
            {[1, 2, 3].map((i) => (
              <div className="col-md-4" key={i}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="fw-bold">Blog Title {i}</h5>
                    <p className="text-muted">Short description of the blog post...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            {["What services do you offer?", "What technologies do you use?", "How to start?"].map((q, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>
                    {q}
                  </button>
                </h2>
                <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    We provide professional web solutions tailored to your needs.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Free Consultation</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="shadow-sm p-4 rounded-4 bg-white">
                <input className="form-control mb-3" placeholder="Name" />
                <input className="form-control mb-3" placeholder="Email" />
                <textarea className="form-control mb-3" placeholder="Requirement"></textarea>
                <button className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>© {new Date().getFullYear()} ScaloWeb. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
