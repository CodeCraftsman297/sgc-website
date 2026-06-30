import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <div className="contact-box">

        <h3>Shree Ganesh Classes</h3>

        <address className="contact-address">
          605, Last Bus Stop,<br />
          Room No. 5, Kedare Bhuvan Chawl,<br />
          Tembipada, Bhandup (W),<br />
          Mumbai - 400078
        </address>

        <p className="contact-phone">
          📞 <a href="tel:9987420415">9987420415</a><br />
          📞 <a href="tel:8779751476">8779751476</a>
        </p>

        <div className="contact-buttons">

          <a
            href="tel:9987420415"
            aria-label="Call Shree Ganesh Classes"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919987420415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Shree Ganesh Classes on WhatsApp"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;