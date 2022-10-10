import React, { useState } from "react";
import "./Navbar.css";
import { FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const mobileHandler = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <Link
        activeClass="active"
        to="/"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <div className="logo">Oduola Timothy</div>
      </Link>

      <div className={toggle ? "nav-con" : "nav-con closed"}>
        <ul className="nav-child">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <li>About</li>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <li>Skills</li>
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <li>Services</li>
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <li>Works</li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <li>Projects</li>
          </Link>
          <Link
            activeClass="active"
            to="testimonies"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <li>Testimonies</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <li>Contact</li>
          </Link>
        </ul>
        <div className="icon">
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
      </div>
      <div className="mobile-icon" onClick={mobileHandler}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
