const ContactPage = ({ children }) => {
  return (
    <>
      <section className="content-container about">
        <h1 className="about-text">Contact Me</h1>
        <div className="about-text">
          <h2>Email</h2>
          <p>
            <a href="mailto:M.Koliakin@me.com" className="email-link">
              M.Koliakin@me.com
            </a>
          </p>
        </div>
        <div className="about-text">
          <h2>My Local Time</h2>
          <p className="timezone-info">YEKT (UTC+5)</p>
          <div className="time-display">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
