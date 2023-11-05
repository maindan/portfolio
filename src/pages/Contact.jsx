import '../style/Contact.css'

function Contact() {
    return(
        <div className="Contact">
            <div className="profile">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique porro sequi nihil rerum fugit laboriosam iste? Beatae, dolor aspernatur. Inventore animi aperiam soluta veniam, nam non odio quasi. Non, nam.</p>
            </div>
            <div className="form">
                <h2>//Entre em contato via e-mail!</h2>
                <form action="">
                    <input type="hidden" name="accessKey" value="9b4bc2f0-eebd-4987-adca-724361252914" />
                    <input type="text" name="name" placeholder="Nome" />
                    <input type="email" name="email" placeholder="E-mail" />
                    <input type="text" name="assunto" placeholder="Assunto" />
                    <textarea name="message" cols="21" rows="10" placeholder="Mensagem" />
                    <input type="text" name="honeypot" style={{ display: 'none' }} />
                    <input type="hidden" name="redirectTo" value="https://maindan.github.io/portfolio/About" />
                    <input type="submit" name="Submit" />
                </form>
            </div>
        </div>
)
}

export default Contact