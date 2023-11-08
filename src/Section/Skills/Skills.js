import skills from "../../image/skills.png";
import "./skills.css";

const Skills = () => {


    const skill = [
        {
            name: "HTML",
            number: "80%",
            width: "80%",

        },
        {
            name: "CSS",
            number: "85%",
            width: "85%",

        },
        {
            name: "JavaScript",
            number: "70%",
            width: "70%",

        },
        {
            name: "python",
            number: "90%",
            width: "90%",

        },
    ]
    return (
        <div>
            <div className="our-skills" id="our-skills">
                <h2 className="main-title">Our Skills</h2>
                <div className="container">
                    <img src={skills} alt="" />
                    <div className="skills">
                        {skill.map(item => {
                            return (
                                <div className="skill" key={item.name}>
                                    <h3>{item.name}<span>{item.number}</span></h3>
                                    <div className="the-progress">
                                        <span style={{item,}}></span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills
