import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/53015963?s=460&u=99120c96a5863abd2812bc98289191516077f0eb&v=4" alt="Matheus Evangelista" />
                <div>
                    <strong>Matheus Evangelista</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur reiciendis sapiente ullam. A incidunt reiciendis, recusandae numquam aspernatur quis maiores dicta deserunt tenetur optio perferendis commodi sed distinctio illum!
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="submit">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem