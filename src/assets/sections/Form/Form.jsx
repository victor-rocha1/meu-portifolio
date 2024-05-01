import React, { useState } from 'react';
import Submit from "../../components/Button/Submit/Submit.jsx";
import Title from "../../components/Title/Title";
import PhoneInput from 'react-phone-number-input'
import "./form.css";

function Form() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (event) => {
        const email = event.target.value;
        const isValid = emailRegex.test(email);
        setEmail(email);
        setEmailError(!isValid);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <section className="form">
            <div className="interface">
                <Title text="FALE" spantext="COMIGO" />

                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" id="name" placeholder="Seu nome:" required />
                    <input type="email" id="email" placeholder="Seu email:" value={email} onChange={handleEmailChange} required className={emailError ? 'invalid' : ''} />
                    <span className="error-message">{emailError && "Por favor, insira um email válido"}</span>

                    <input type="tel" placeholder="Seu número de telefone (opcional):" />
                    <textarea placeholder="Sua mensagem:" value={message} onChange={handleMessageChange} required></textarea>
                    <Submit text="ENVIAR" />
                </form>
            </div>
        </section>
    )
}

export default Form;