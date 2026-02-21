import java from "../assets/icons8-java-logo-480.png"
import html from "../assets/icons8-html-5-480.png"
import css from "../assets/icons8-css-logo-480.png"
import js from "../assets/icons8-javascript-480.png"
import python from "../assets/icons8-python-480.png"
import bootstrap from "../assets/icons8-bootstrap-logo-480.png"
import github from "../assets/github.png"
import git from "../assets/social.png"
import mysql from "../assets/images.png"
import "../styles/skills.css"

export default function Skills(){

return(

<section className="skillSection" id="Skills">

<div className="skillsection">

<h2 className="headingSkillSection"><i className="bi bi-laptop"></i>
Skills & <span className="spanSkill">Abilities</span>
</h2>

<div className="skillcontainer">
<div className="row">

<div className="bar"><div className="info"><img src={java}/><span className="skilliconspans">Java</span></div></div>

<div className="bar"><div className="info"><img src={html}/><span className="skilliconspans">HTML</span></div></div>

<div className="bar"><div className="info"><img src={css}/><span className="skilliconspans">CSS</span></div></div>

<div className="bar"><div className="info"><img src={js}/><span className="skilliconspans">JavaScript</span></div></div>

<div className="bar"><div className="info"><img src={python}/><span className="skilliconspans">Python</span></div></div>

<div className="bar"><div className="info"><img src={bootstrap}/><span className="skilliconspans">Bootstrap</span></div></div>

<div className="bar"><div className="info"><img src={github}/><span className="skilliconspans">Github</span></div></div>

<div className="bar"><div className="info"><img src={git}/><span className="skilliconspans">Git</span></div></div>

<div className="bar"><div className="info"><img src={mysql}/><span className="skilliconspans">MySQL</span></div></div>

</div>
</div>

</div>

</section>

)
}