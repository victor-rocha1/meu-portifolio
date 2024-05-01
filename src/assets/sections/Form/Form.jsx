import Submit from "../../components/Button/Submit/Submit";
import Title from "../../components/Title/Title";
import "./form.css";

function Form(){
    return(
        <section className="form">
            <div className="interface">
                <Title text="FALE" spantext="COMIGO"/>

                <form action="">
                    <input type="text" placeholder="Seu nome:" required/>
                    <input type="email" placeholder="Seu email:" required/>
                    <input type="tel" placeholder="Seu número de telefone (opcional):" />
                    <textarea placeholder="Sua mensagem:" required></textarea>
                    <Submit text="ENVIAR" form="myForm" />
                </form>
            </div>
        </section>
    )
}

export default Form;