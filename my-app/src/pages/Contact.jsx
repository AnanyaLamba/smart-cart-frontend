import "./CSS/Contact.css"
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below to get in
          touch.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
