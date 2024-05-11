import React from 'react';
import Icons from '../../components/Icons/Icons.jsx';
import Title from '../../components/Title/Title';
import avatar from '/public/images/avatar.jpg';
import './about.css';

function About() {
  const socialIcons = [
    { name: 'instagram', link: 'https://www.instagram.com/victor_rocha924/?next=%2F' },
    { name: 'github', link: 'https://www.github.com/victor-rocha1' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/victor-rocha-dos-reis-751376267/' },
  ];
  return (
    <section className='about'>
      <div className="interface">
        <div className="flex">
          <div className="img-about">
            <img id='img-txt' src={avatar} alt="avatar" />
          </div>

          <div className="content">
            <Title text="PRAZER, SOU" spantext=" VICTOR ROCHA." />
            <div className="txt-about">
              <p>Sou estudante de <span className='blue'>Análise e Desenvolvimento de Sistemas</span>, apaixonado por tecnologia e programação. Atualmente, estou focando meus estudos no desenvolvimento Web, tanto no Front End quanto no Back End. Busco aprender e aprimorar minhas habilidades para construir soluções inovadoras e funcionais.</p>
              <p>Participo de diversos cursos que vão além do conhecimento passado na faculdade, onde o foco atual vem sendo o Front-End, em tecnologias como <span className='blue'>HTML5</span>,<span className='blue'> CSS3</span> usando a biblioteca <span className='blue'>React</span> do JavaScript para praticar meus conhecimentos</p>
            </div>
            <Icons
              icons={socialIcons}
              className="small-icons"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;