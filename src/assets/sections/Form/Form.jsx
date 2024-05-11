import React, { useState } from 'react';
import axios from 'axios';
import Submit from "../../components/Button/Submit/Submit.jsx";
import Title from "../../components/Title/Title";
import "./form.css";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [emailError, setEmailError] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError(true);
            return;
        }

        try {
            await axios.post('/api/send-email', formData);
            alert('E-mail enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            alert('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <section className="form" id='form'>
            <div className="interface">
                <Title text="FALE" spantext="COMIGO" />

                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Seu nome:" value={formData.name} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Seu email:" value={formData.email} onChange={handleInputChange} required className={emailError ? 'invalid' : ''} />
                    <span className="error-message">{emailError && "Por favor, insira um email válido"}</span>

                    <input type="tel" name="phone" placeholder="Seu número de telefone (opcional):" value={formData.phone} onChange={handleInputChange} />
                    <textarea name="message" placeholder="Sua mensagem:" value={formData.message} onChange={handleInputChange} required></textarea>
                    <Submit text="ENVIAR" />
                </form>
            </div>
        </section>
    )
}

export default Form;