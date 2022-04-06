import { Titulo } from "./style.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../../componentes/Card"
import logo from "../../assets/Group 1.png"
import logoAmarela from "../../assets/Group 2.png"
import logoVerde from "../../assets/Group 3.png"
export default function Subscription() {
    const [planos, setPlanos] = useState([])

    return (
        <>
            <Link to={`/subscription2`} >
                <Titulo>Escolha Seu Plano</Titulo>
            </Link>
            <Card
                img={logo}
                valor="R& 39,99"
            />

            <Card
                img={logoAmarela}
                valor="R& 39,99"
            />

            <Card
                img={logoVerde}
                valor="R& 39,99"
            />

        </>
    )
}