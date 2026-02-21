import "../styles/contact.css"
import contactImg from "../assets/5124556-removebg-preview.png"

export default function Contact(){

return(

<section className="ContactSection" id="Contact">

<h1 className="headingContactSection"><i class="bi bi-headset"></i>
Get in <span className="spanContact">Touch</span>
</h1>

<div className="ContactContainerImage">

<img src={contactImg} height="200"/>


<form action="https://formspree.io/f/xdklowdl" method="POST">

<div className="field">
<input type="text" name="name" placeholder="Name" required/>
</div>

<div className="field">
<input type="email" name="email" placeholder="Email" required/>
</div>

<div className="field">
<input type="tel" name="phone" placeholder="Phone"/>
</div>

<div className="field">
<textarea name="message" rows="4" placeholder="Your message..." required></textarea>
</div>

<div className="buttonarea">
<button type="submit" className="submitbtn">
Submit<i class="bi bi-send-fill"></i>
</button>
</div>

</form>

</div>

</section>

)
}