import { Titulo } from "./style.js";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../../componentes/Card"
import UserContext from "../../contexts/context.js";

export default function Subscription() {
    const [planos, setPlanos] = useState([])
    const { token } = useContext(UserContext)
    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
        requisicao.then(Sucesso)
        requisicao.catch(Fracasso)

        function Sucesso(resp) {
            console.log(resp)
            setPlanos(resp.data)
        }
        function Fracasso(erro) {
            console.log(erro)
        }
    }, [])

    console.log(planos)
    return (
        <>

            <Titulo style={{color:"pink"}}>Escolha Seu Plano</Titulo>

            {planos.map((element) => {
                return (
                    <Link to={`/subscription/${element.id}`} >
                        <Card
                            img={element.image}
                            valor={(element.price).toLocaleString('pt-br')}
                            alt={element.image}
                            key={element.id}
                        />
                    </Link>

                )
            })}

        </>
    )
}