import "./projects.css"
import Title from "../../components/Title/Title.jsx";

function Projects() {
    return (
        <section className="projects">
            <div className="interface">
                <Title text="MEUS " spantext="PROJETOS" />
                <div className="flex">
                    <div className="img-project"></div>
                    <div className="img-project"></div>
                    <div className="img-project"></div>
                </div>
            </div>
        </section>
    )
}

export default Projects;