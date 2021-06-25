import { useContext } from "react"
import { Link } from "react-router-dom"

import { useAuth } from "../hooks/useAuth"
import { Button } from "../components/Button"

import "../styles/auth.scss"

import logoImage from "../assets/images/logo.svg"
import illustrationImg from "../assets/images/illustration.svg"


export function NewRoom() {

    const  { user } = useAuth()
    
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo </strong>
                <p>Tire dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImage} alt="Letmeask"/>
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}