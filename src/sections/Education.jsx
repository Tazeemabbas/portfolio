import "../styles/education.css"
import kle from "../assets/KLE.jpeg"
import oxford from "../assets/Oxford.jpg"

export default function Education(){

return(

<section className="EducationSection" id="Education">

<h1 className="main-heading"><i class="bi bi-mortarboard-fill"></i>
My <span className="headingEducationColor">Education</span>
</h1>

<p>
Education is not the learning of facts, but the training of the mind to think.
</p>


<div className="collegeContainer">


{/* CARD 1 */}
<div className="box">

<div className="image">
<img src={kle} className="CollegePhoto"/>
</div>

<div className="content">
<h3 className="Cname">Bachelor Of Computer Applications</h3>
<p>KLE Society's College Of BCA Dharwad</p>
<h4 className="Cyear">2021 - 2024 | Completed</h4>
</div>

</div>


{/* CARD 2 */}
<div className="box">

<div className="image">
<img src={oxford} className="CollegePhoto"/>
</div>

<div className="content">
<h3 className="Cname">Patil's Oxford PU Science College</h3>
<p>Oxford PU College Nagarbetta</p>
<h4 className="Cyear">2019 - 2021 | Completed</h4>
</div>

</div>


</div>

</section>

)
}