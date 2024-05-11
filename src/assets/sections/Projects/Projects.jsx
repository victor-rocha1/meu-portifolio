
import React from 'react';
import Title from "../../components/Title/Title.jsx";
import ImgProject from "../../components/ImgProject/ImgProject.jsx";
import imgSpace from "./images/VRSpaceX.png";
import imgValidador from "./images/validador.png";
import imgCalculadoraJs from "./images/calculadorajs.png";
import imgCalculadoraPy from "./images/calculadorapy.png";
import imgjogoDaVelha from "./images/jogodavelha.png";


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

                    <ImgProject
                        img={imgValidador}
                        text="Validador de Email e Senha"
                        github='https://github.com/victor-rocha1/Validador-de-Email-e-Senha'
                        button={true}
                    />

                    <ImgProject
                        img={imgjogoDaVelha}
                        text="Jogo da Velha"
                        github='https://github.com/victor-rocha1/Jogo-da-Velha'
                        button={true}
                    />

                    <ImgProject
                        img={imgCalculadoraJs}
                        text="Calculadora JavaScript"
                        github='https://github.com/victor-rocha1/Calculadora-JavaScript'
                        button={true}
                    />

                    <ImgProject
                        img={imgCalculadoraPy}
                        text="Calculadora Python"
                        github='https://github.com/victor-rocha1/Calculadora-Python'
                        button={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;
