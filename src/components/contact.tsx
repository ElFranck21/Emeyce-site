import React, { useState } from 'react';
import "../style.css";


//ya deberian cargar los estilos de tailwind
const ContactForm: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        setSubmitted(true);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mensaje:</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Enviar</button>
            {submitted && <p>¡Gracias por contactarnos!</p>}
        </form>
    );
};


export default ContactForm;