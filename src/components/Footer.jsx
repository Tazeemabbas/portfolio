import "../styles/footer.css"
export default function Footer(){

return(

<footer>

<div className="footersection">

<div className="footerbox">
<h3 className="footerHeading">Tazeem's Portfolio</h3>
<p className="footerpara">
Thank you for visiting my personal portfolio website.
</p>
</div>

<div className="footerbox">
<h3 className="footerHeading">Quick Links</h3>

<a href="#Home" className="footerLinks"><i className="bi bi-arrow-right-circle-fill"></i> Home</a>
<a href="#About" className="footerLinks"><i className="bi bi-arrow-right-circle-fill"></i> About</a>
<a href="#Skills" className="footerLinks"><i className="bi bi-arrow-right-circle-fill"></i> Skills</a>
<a href="#Education" className="footerLinks"><i className="bi bi-arrow-right-circle-fill"></i> Education</a>
<a href="#Contact" className="footerLinks"><i className="bi bi-arrow-right-circle-fill"></i> Contact</a>

</div>

<div className="footerbox">

<h3 className="footerHeading">Contact Info</h3>

<p><i className="bifootericon bi-telephone-fill"></i> +91 8722746569</p>
<p><i className="bifootericon bi-envelope-fill"></i> tazeemabbasa921@gmail.com</p>
<p><i className="bifootericon bi-geo-alt-fill"></i> Hyderabad</p>

<ul className="social-list-footer">

<li><a href="#"><i className="bi bi-facebook"></i></a></li>
<li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
<li><a href="#"><i className="bi bi-instagram"></i></a></li>
<li><a href="#"><i className="bi bi-linkedin"></i></a></li>
<li><a href="#"><i className="bi bi-github"></i></a></li>
<li><a href="#"><i className="bi bi-telegram"></i></a></li>

</ul>

</div>

</div>

<div className="copyright">
<p>Designed With ❤️ By Tazeem</p>
</div>

</footer>

)
}