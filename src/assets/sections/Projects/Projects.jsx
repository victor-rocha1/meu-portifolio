import "./projects.css"
import Title from "../../components/Title/Title.jsx";
import ImgProject from "../../components/ImgProject/ImgProject.jsx";

function Projects() {
    const imgSpace = './public/images/VRSpaceX.png';
    return (
        <section className="projects">
            <div className="interface">
                <Title text="MEUS " spantext="PROJETOS" />
                <div className="flex">
                    <ImgProject img={imgSpace} text="VRSpaceX"/>
                    <ImgProject img={imgSpace} text="VRSpaceX"/>
                    <ImgProject img={imgSpace} text="VRSpaceX"/>
                </div>
            </div>
        </section>
    )
}

export default Projects;