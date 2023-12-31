import '../style/Home.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="Home">
            <section className='container'>
                <article>
                    <h2 data-aos="fade-down" data-aos-duration='2000'>// Olá!</h2>
                    <p data-aos="fade-zoom-in" data-aos-duration='2000'>Seja bem vindo a minha página! Criei essa Single Page Application para expor meus projetos e concentrar minhas informações pessoais e profissionais.</p>
                </article>
                <aside data-aos="fade-zoom-in" data-aos-duration='2000' className='projetos'>
                    <h2>Projetos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolores repellat magni eveniet dicta, excepturi eos maxime ad totam, placeat ex voluptas, quas eius ducimus illo vero est molestias atque!</p>
                    
                </aside>
            </section>
        </div>
    )
}

export default Home