import "../styles/about.css"
import aboutImg from "../assets/About me.jpg";

export default function About() {
  return (
    <section className="AboutSection" id="About">
      <div className="aboutsectionContainer">
        <h2 className="main-heading">
          <i className="bi bi-person-fill"></i>
          About <span className="aboutmeheadingspan">Me</span>
        </h2>

        <div className="detailSection">
          {/* PHOTO */}
          <div className="photoSection">
            <img src={aboutImg} className="aboutProfile" />
          </div>

          {/* TEXT */}
          <div className="textSection">
            <h2>
              I'm <span className="namecolor">Tazeem</span>
            </h2>

            <span className="spanheading">Fullstack Developer</span>

            <p>
              I am a Full-Stack developer passionate about improving my coding
              skills & developing applications & websites using MERN Stack.
            </p>

            <p>
              <span className="highlight">Email :</span>{" "}
              tazeemabbasa921@gmail.com
            </p>
            <p>
              <span className="highlight">Place :</span> Hyderabad
            </p>

            <a href="/Resume.pdf" target="_blank" className="aboutbtn">
              Resume<i className="bi bi-caret-right-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
