import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>Shree Ganesh Classes</h3>

        <p className="footer-tagline">
          Believe In Yourself
        </p>

        <address className="footer-address">
          605, Last Bus Stop, Room No. 5,
          Kedare Bhuvan Chawl,
          <br />
          Tembipada, Bhandup (W),
          Mumbai - 400078
        </address>

        <p className="footer-phone">
          📞{" "}
          <a href="tel:9987420415">
            9987420415
          </a>{" "}
          |{" "}
          <a href="tel:8779751476">
            8779751476
          </a>
        </p>

        <div
          className="footer-line"
          aria-hidden="true"
        ></div>

        <p className="copyright">
          © 2026 Shree Ganesh Classes. All Rights Reserved.
        </p>

        <p className="developer">
          Designed &amp; Developed by{" "}
          <strong>Nishant Khetal</strong> © 2026
        </p>

      </div>

    </footer>
  );
}

export default Footer;