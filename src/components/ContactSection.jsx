import './ContactSection.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
                name: formData.nome,
                email: formData.email,
                subject: formData.assunto,
                message: formData.mensagem,
                origin: "Formulário de contato do Portfolio",
                time: new Date().toLocaleString("pt-BR"),
            },
            {
                publicKey: import.meta.env.VITE_PUBLIC_KEY
            }
        ).then(() => {
            setStatus("Mensagem enviada com sucesso!");
            setFormData({ nome: "", email: "", assunto: "", mensagem: "" })

            setTimeout(() => setStatus(""), 5000);
        }, (error) => {
            console.error(error);
            setStatus("Erro ao enviar mensagem.");

            setTimeout(() => setStatus(""), 5000);
        });
    };

    return (
        <section id="Contact">
            <h2>Contato</h2>
            <p>Quer me contratar para um projeto ou saber mais sobre mim? Entre em contato!</p>
            <form id='ContactForm'>
                <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
                <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="assunto" placeholder="Assunto" value={formData.assunto} onChange={handleChange} required />
                <textarea name="mensagem" placeholder="Mensagem" cols={30} rows={10} value={formData.mensagem} onChange={handleChange} required></textarea>
                <button type='submit' onClick={handleSendEmail}>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                        </svg>
                        </div>
                    </div>
                    <span>Enviar</span>
                </button>
                {status && <p className="status">{status}</p>}
            </form>
            <a id='linkedin' href='https://www.linkedin.com/in/eduardo-cavalcante-dev' target='_blank'>Ou fale comigo no LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </a>
        </section>
    )
}

export default ContactSection;