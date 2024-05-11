import Title from "../../components/Title/Title.jsx";
import "./specialties.css";

function Specialties() {
    return (
        <div className="specialities">
            <section className="especialidades">
                <div className="interface">
                    <Title text="MINHAS " spantext="ESPECIALIDADES"/>
                    <div className="flex">
                        <div className="box">
                            <i class="bi bi-code-square"></i>
                            <h2>FRONT END</h2>
                            <p>Desenvolvo aplicações usando JavaScript como base, HTML5 e CSS3 para marcação, e a Biblioteca <span>React </span> para uma programação mais organizada e eficiente..</p>
                        </div>

                        <div className="box">
                            <i class="bi bi-laptop"></i>
                            <h2>BACK END</h2>
                            <p>Tenho experiência acadêmica com a <span>Linguagem Python</span>, cusrsando disciplinas e desenvolvendo aplicações simples, como uma calculadora feita inteiramente com Python</p>
                        </div>

                        <div className="box">
                            <i class="bi bi-database"></i>
                            <h2>DADOS</h2>
                            <p>Conhecimentos na <span>Linguagem SQL e e em Banco de Dados Relacional</span> usando o Software <span>PostgreSQL</span>, usando comandos simples para consultas em Tabelas Relacionais</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Specialties