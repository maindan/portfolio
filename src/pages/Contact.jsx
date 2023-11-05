import '../style/Contact.css';
import { useState} from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [message, setMessage] = useState('');
    
    function sendEmail(e) {
        e.preventDefault();

        if(name === "" && email === "" && message === "") {
            alert("Preencha todos os campos!");
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_ljv1p79", "template_b30369b", templateParams, "9Dn6tHrjsP3qXH7cz")
        .then((response) => {
            alert('email enviado!')
            console.log(response.status, response.text)
            setName('')
            setEmail('')
            setAssunto('')
            setMessage('')
        }, (err) => {
            console.log("Erro: ", err)
        });
    };

    return(
        <div className="Contact">
            <div className="profile">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique porro sequi nihil rerum fugit laboriosam iste? Beatae, dolor aspernatur. Inventore animi aperiam soluta veniam, nam non odio quasi. Non, nam.</p>
            </div>
            <div className="form">
                <h2>//Entre em contato via e-mail!</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Nome" onChange={(e)=>{setName(e.target.value)}} value={name} />
                    <input type="email" name="email" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                    <input type="text" name="assunto" placeholder="Assunto" onChange={(e)=>{setAssunto(e.target.value)}} value={assunto} />
                    <textarea name="message" cols="21" rows="10" placeholder="Mensagem" onChange={(e)=>{setMessage(e.target.value)}} value={message} />
                    <input type="submit" name="Submit" />
                </form>
            </div>
        </div>
)
}

export default Contact