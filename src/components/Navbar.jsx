import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {" "}
      <nav className="navbar">
        {" "}
        <div className="brand">
          {" "}
          <a href="#">
            {" "}
            <i className="bi bi-bug-fill"></i>
            Tazeem{" "}
          </a>{" "}
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
        <ul
          className={open ? "nav-links active" : "nav-links"}
          onClick={() => setOpen(false)}
        >
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
