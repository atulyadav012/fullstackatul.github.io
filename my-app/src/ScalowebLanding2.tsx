import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-family-sans-serif">
      {/* Navigation Bar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${isNavScrolled ? 'bg-white shadow-sm py-2' : 'bg-dark py-3'} transition-all duration-300`}>
        <div className="container">
          {/* Logo Placeholder */}
          <a className="navbar-brand fw-bold fs-4" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <div className="d-flex align-items-center">
              <div className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
                <span className="fs-5 fw-bold">S</span>
              </div>
              <span className={isNavScrolled ? 'text-dark' : 'text-white'}>ScaloWeb</span>
            </div>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className={`nav-link fw-semibold ${isNavScrolled ? 'text-dark' : 'text-white'}`} href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a></li>
              <li className="nav-item"><a className={`nav-link fw-semibold ${isNavScrolled ? 'text-dark' : 'text-white'}`} href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
              <li className="nav-item"><a className={`nav-link fw-semibold ${isNavScrolled ? 'text-dark' : 'text-white'}`} href="#" onClick={(e) => { e.preventDefault(); scrollToSection('blogs'); }}>Blogs</a></li>
              <li className="nav-item"><a className={`nav-link fw-semibold ${isNavScrolled ? 'text-dark' : 'text-white'}`} href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQs</a></li>
              <li className="nav-item"><a className={`nav-link fw-semibold ${isNavScrolled ? 'text-dark' : 'text-white'}`} href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a></li>
            </ul>
            <button className={`btn ${isNavScrolled ? 'btn-primary' : 'btn-outline-light'} ms-lg-3 rounded-pill px-4`} onClick={() => scrollToSection('contact')}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Reduced height, better text visibility */}
      <section id="hero" className="position-relative overflow-hidden bg-gradient-dark" style={{ minHeight: '85vh' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container position-relative d-flex align-items-center" style={{ minHeight: '85vh' }}>
          <div className="row align-items-center">
            <div className="col-lg-7 text-white">
              <div className="badge bg-primary bg-opacity-25 text-white rounded-pill px-4 py-2 mb-4">Premium Web Solutions</div>
              <h1 className="display-3 fw-bold mb-4 text-shadow">Build & Scale Your <span className="text-primary">Web Applications</span></h1>
              <p className="lead mb-4 text-shadow-sm opacity-95">18+ years combined experience delivering enterprise-grade web solutions that drive business growth.</p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg rounded-pill px-5" onClick={() => scrollToSection('contact')}>Free Consultation</button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-5" onClick={() => scrollToSection('services')}>Explore Services</button>
              </div>
              <div className="mt-5 pt-3 d-flex gap-5">
                <div><span className="display-6 fw-bold">10+</span><p className="mb-0 opacity-75">Projects Delivered</p></div>
                <div><span className="display-6 fw-bold">100%</span><p className="mb-0 opacity-75">Client Satisfaction</p></div>
                <div><span className="display-6 fw-bold">24/7</span><p className="mb-0 opacity-75">Support Available</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-5 py-xl-6 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-3">What We Offer</div>
            <h2 className="display-5 fw-bold mb-3">Our Services</h2>
            <p className="lead text-secondary w-75 mx-auto">Comprehensive web solutions tailored to your business needs</p>
          </div>
          <div className="row g-4">
            {[
              { title: "Web Development", icon: "💻", desc: "Modern, responsive websites with cutting-edge frameworks and best practices.", color: "primary" },
              { title: "API Development", icon: "🔌", desc: "Scalable RESTful & GraphQL APIs for seamless integration.", color: "success" },
              { title: "Maintenance", icon: "⚙️", desc: "24/7 monitoring, security updates, and performance optimization.", color: "warning" },
              { title: "Optimization", icon: "🚀", desc: "Speed, SEO, and conversion rate optimization for maximum ROI.", color: "info" }
            ].map((service, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all rounded-4 overflow-hidden">
                  <div className="card-body p-4 text-center">
                    <div className={`bg-${service.color} bg-opacity-10 rounded-3 d-inline-flex p-3 mb-4`}>
                      <span className={`display-6 text-${service.color}`}>{service.icon}</span>
                    </div>
                    <h4 className="fw-bold mb-3">{service.title}</h4>
                    <p className="text-secondary mb-0">{service.desc}</p>
                  </div>
                  <div className="card-footer bg-white border-0 pb-4 text-center">
                    <a href="#" className={`text-${service.color} text-decoration-none fw-semibold`} onClick={(e) => e.preventDefault()}>Learn More →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5 py-xl-6 bg-light">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="bg-primary rounded-4 overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Team working" className="img-fluid w-100" style={{ height: '400px', objectFit: 'cover' }} />
                </div>
                <div className="position-absolute bottom-0 start-0 translate-middle bg-white rounded-3 shadow-lg p-3 d-flex gap-3">
                  <div className="text-center px-3"><span className="h3 fw-bold text-primary">12+</span><p className="mb-0 small">Years Experience</p></div>
                  <div className="vr"></div>
                  <div className="text-center px-3"><span className="h3 fw-bold text-primary">6+</span><p className="mb-0 small">Years Experience</p></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-3">Our Story</div>
              <h2 className="display-5 fw-bold mb-4">Where Expertise Meets Innovation</h2>
              <p className="lead text-secondary mb-4">Led by industry veterans with a passion for building exceptional digital experiences.</p>
              <div className="mb-4">
                <div className="d-flex gap-3 mb-3">
                  <div className="flex-shrink-0"><div className="bg-primary rounded-circle p-2"><span className="text-white">✓</span></div></div>
                  <div><h5 className="fw-bold mb-1">Atul Yadav</h5><p className="text-secondary mb-0">12+ years of full-stack architecture & team leadership</p></div>
                </div>
                <div className="d-flex gap-3">
                  <div className="flex-shrink-0"><div className="bg-primary rounded-circle p-2"><span className="text-white">✓</span></div></div>
                  <div><h5 className="fw-bold mb-1">Sarita Yadav</h5><p className="text-secondary mb-0">6+ years specializing in modern frontend & UX design</p></div>
                </div>
              </div>
              <p className="text-secondary mb-4">Together, we've helped startups and enterprises build scalable, reliable web applications that drive real business results.</p>
              <button className="btn btn-outline-primary rounded-pill px-5" onClick={() => scrollToSection('contact')}>Work With Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section id="blogs" className="py-5 py-xl-6 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-3">Latest Insights</div>
            <h2 className="display-5 fw-bold mb-3">From Our Blog</h2>
            <p className="lead text-secondary w-75 mx-auto">Expert advice on web development, technology trends, and business growth</p>
          </div>
          <div className="row g-4">
            {[
              { title: "The Future of Web Development in 2024", desc: "Explore emerging trends and technologies shaping the web landscape.", date: "Jan 15, 2024", category: "Trends" },
              { title: "10 Tips for Optimizing Website Performance", desc: "Practical strategies to boost your site speed and user experience.", date: "Jan 10, 2024", category: "Performance" },
              { title: "Why Your Business Needs a Custom Web App", desc: "How tailored solutions give you competitive advantage.", date: "Jan 5, 2024", category: "Business" }
            ].map((blog, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all rounded-4 overflow-hidden">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-3"><span className="badge bg-primary bg-opacity-10 text-primary">{blog.category}</span><span className="small text-secondary">{blog.date}</span></div>
                    <h4 className="fw-bold mb-3">{blog.title}</h4>
                    <p className="text-secondary mb-0">{blog.desc}</p>
                  </div>
                  <div className="card-footer bg-white border-0 pb-4"><a href="#" className="text-primary text-decoration-none fw-semibold" onClick={(e) => e.preventDefault()}>Read Article →</a></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5"><button className="btn btn-outline-primary rounded-pill px-5">View All Articles</button></div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section id="faqs" className="py-5 py-xl-6 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-3">Common Questions</div>
            <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead text-secondary w-75 mx-auto">Everything you need to know about working with us</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {[
                  { q: "What's your typical project timeline?", a: "Project timelines vary based on complexity. A standard website takes 4-6 weeks, while complex web applications may take 3-6 months. We'll provide a detailed timeline during consultation." },
                  { q: "Do you offer ongoing support?", a: "Yes! We provide comprehensive maintenance packages including 24/7 monitoring, security updates, backups, and technical support." },
                  { q: "What technologies do you specialize in?", a: "We work with React, Node.js, Python/Django, Laravel, Vue.js, and modern cloud platforms like AWS and Azure." },
                  { q: "How do you handle project communication?", a: "We use tools like Slack, Trello, and weekly video calls to ensure transparent communication throughout the project." }
                ].map((faq, i) => (
                  <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden" key={i}>
                    <h2 className="accordion-header"><button className="accordion-button collapsed bg-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>{faq.q}</button></h2>
                    <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body text-secondary">{faq.a}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5 py-xl-6 bg-gradient-primary text-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="badge bg-white bg-opacity-25 text-white rounded-pill px-4 py-2 mb-3">Get In Touch</div>
              <h2 className="display-5 fw-bold mb-4">Let's Build Something Great Together</h2>
              <p className="lead mb-4 opacity-90">Ready to transform your idea into a powerful web application? Schedule a free consultation today.</p>
              <div className="d-flex gap-3 mb-3"><div className="bg-white bg-opacity-20 rounded-circle p-2"><span>📞</span></div><div><p className="mb-0 fw-bold">Phone</p><p className="mb-0 opacity-75">+1 (555) 123-4567</p></div></div>
              <div className="d-flex gap-3"><div className="bg-white bg-opacity-20 rounded-circle p-2"><span>✉️</span></div><div><p className="mb-0 fw-bold">Email</p><p className="mb-0 opacity-75">hello@scaloweb.com</p></div></div>
            </div>
            <div className="col-lg-7">
              <div className="card border-0 rounded-4 shadow-lg">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="fw-bold text-dark mb-4">Request a Free Consultation</h3>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6"><input type="text" className="form-control form-control-lg rounded-3" placeholder="Full Name" /></div>
                      <div className="col-md-6"><input type="email" className="form-control form-control-lg rounded-3" placeholder="Email Address" /></div>
                      <div className="col-12"><input type="tel" className="form-control form-control-lg rounded-3" placeholder="Phone Number" /></div>
                      <div className="col-12"><textarea className="form-control form-control-lg rounded-3" rows={4} placeholder="Tell us about your project..."></textarea></div>
                      <div className="col-12"><button className="btn btn-primary btn-lg w-100 rounded-pill">Submit Request →</button></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4"><div className="d-flex align-items-center mb-3"><div className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}><span className="fs-5 fw-bold">S</span></div><span className="fs-4 fw-bold">ScaloWeb</span></div><p className="text-secondary">Crafting exceptional web experiences for businesses worldwide. Let's bring your vision to life.</p></div>
            <div className="col-lg-2"><h5 className="mb-3">Quick Links</h5><ul className="list-unstyled"><li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li><li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li><li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); scrollToSection('blogs'); }}>Blog</a></li></ul></div>
            <div className="col-lg-3"><h5 className="mb-3">Support</h5><ul className="list-unstyled"><li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQs</a></li><li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li><li><a href="#" className="text-secondary text-decoration-none">Privacy Policy</a></li></ul></div>
            <div className="col-lg-3"><h5 className="mb-3">Newsletter</h5><p className="text-secondary">Get latest updates and insights.</p><div className="input-group"><input type="email" className="form-control bg-dark border-secondary text-white" placeholder="Your email" /><button className="btn btn-primary">Subscribe</button></div></div>
          </div>
          <hr className="border-secondary mt-4" />
          <div className="text-center text-secondary"><small>© 2024 ScaloWeb. All rights reserved.</small></div>
        </div>
      </footer>

      <style>{`
        .bg-gradient-dark { background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 100%); }
        .bg-gradient-primary { background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); }
        .hover-shadow { transition: all 0.3s ease; }
        .hover-shadow:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.02) !important; }
        .transition-all { transition: all 0.3s ease; }
        .text-shadow { text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
        .text-shadow-sm { text-shadow: 0 1px 5px rgba(0,0,0,0.2); }
        .navbar.bg-dark { background-color: #0a0e1a !important; }
      `}</style>
    </div>
  );
};

export default Landing;