import "../styles/hero.css"
import profile1 from "../assets/Profile.jpg";
import profile2 from "../assets/Profile2copy.jpg";

export default function Hero() {
  return (
    <section className="heroSection" id="Home">
      
      <div className="animated-bg">
        <div className="blob"></div>
        <div className="blob blob2"></div>

        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div className="heroSectionLeftPart">
        <div className="textContainer">
          <h2>
            Hi There,<br />
            I'm Tazeem <span>Abbas</span>
          </h2>

          <p>
            <span>Fullstack Developmer</span>
          </p>

          <a href="#About" className="aboutbtn">
            <span>About me</span>
            <i className="bi bi-arrow-down-circle-fill"></i>
          </a>

          <ul className="social-list">
            <li>
              <a href="https://www.facebook.com/share/1Am31gZFhC/" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </li>

            <li>
              <a href="https://x.com/Tazeem_21?t=_ysKhhqhD-Z4gaVN_pfzxA&s=09" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/tazeem_21_?igsh=dHAzcnV2c20zNzV0" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/tazeemabbas-aiyanagudi-81b757356" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </li>

            <li>
              <a href="http://t.me/Tazeema21" target="_blank" rel="noreferrer">
                <i className="bi bi-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="heroSectionRightPart">
        <div className="profileContainer">
          <img src={profile1} alt="profile" className="profilepicture" />
          <img src={profile2} alt="profile hover" className="hoversecondpicture" />
        </div>
      </div>

    </section>
  );
}