import "./Footer.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="f">
      <h2>Oduola Timothy</h2>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/oduola-timothy/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/teeking007"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter style={{ marginLeft: "10px" }} />
        </a>
      </div>
      <p>Copyright &copy; 2022 | All rights Reserved</p>
    </div>
  );
};

export default Footer;
