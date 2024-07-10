
import React from 'react';
import Title from "../../components/Title/Title.jsx";
import ImgProject from "../../components/ImgProject/ImgProject.jsx";
import imgSpace from "./images/VRSpaceX.png";
import imgValidador from "./images/validador.png";
import imgCalculadoraPy from "./images/calculadorapy.png";
import imgOneBitFlix from "./images/onebitflix.png"
import imgJogodeDamas from "./images/jogo-de-dama.png"


function Projects() {
    return (
        <section className="projects" id='projects'>
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
                        img={imgJogodeDamas}
                        text="Jogo de Damas - Projeto Acadêmico"
                        github='https://github.com/victor-rocha1/jogo-de-damas'
                        button={true}
                    />

                    <ImgProject
                        img={imgOneBitFlix}
                        text="OneBitFlix"
                        github='https://github.com/victor-rocha1/onebitflix'
                        button={true}
                    />

                    <ImgProject
                        img={imgValidador}
                        text="Validador de Email e Senha"
                        github='https://github.com/victor-rocha1/Validador-de-Email-e-Senha'
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
