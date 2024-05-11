
import React from 'react';
import Title from "../../components/Title/Title.jsx";
import ImgProject from "../../components/ImgProject/ImgProject.jsx";
import imgSpace from "./images/VRSpaceX.png";

function Projects() {
    return (
        <section className="projects">
            <div className="interface">
                <Title text="MEUS " spantext="PROJETOS" />
                <div className="flex">
                    <ImgProject 
                    img={imgSpace} 
                    text="VRSpaceX" 
                    github='https://github.com/victor-rocha1/SpaceX-Bootstrap'
                    button={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;
