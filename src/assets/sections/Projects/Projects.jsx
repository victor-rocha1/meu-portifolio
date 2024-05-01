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
                    <ImgProject img="./public/images/VRSpaceX.png" text="VRSpaceX"/>
                    <ImgProject img="./public/images/VRSpaceX.png" text="VRSpaceX"/>
                    <ImgProject img="./public/images/VRSpaceX.png" text="VRSpaceX"/>
                </div>
            </div>
        </section>
    )
}

export default Projects;