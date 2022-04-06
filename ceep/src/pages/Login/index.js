import { useState , useContext} from "react"
import axios from "axios";
import { Inputs, Titulo, Legenda, Botao, Input } from "./style.js";
import { Link ,useNavigate } from "react-router-dom";
/* import Input from "../../componentes/Inputs" */
import Apertar from "../../componentes/Botao/index.js";
import UserContext from "../../contexts/context.js";

export default function TelaLogin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();
    const {setToken} = useContext(UserContext)
    function EnviarValue(e) {
        e.preventDefault()
        const dados = {
            email: email,
            password: senha
        }
        console.log(dados)
        const enviarInfo = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", dados)
        enviarInfo.then(Sucesso)
        enviarInfo.catch(Fracasso)
    }
    function Sucesso(resposta) {
        console.log(resposta.data)
        navigate('/subscriptions');
        setToken(resposta.data.token)

    }
    function Fracasso(err) {
        alert("email ou senha incorretos")
    }
    console.log(senha, email)
    

    return (
        <>
            <Inputs onSubmit={EnviarValue}>
                <Link to={`/subscriptions`}>
                    <Titulo>DRIVEN</Titulo>
                </Link>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <Botao>
                    <Apertar
                        clicar={"Entrar"} />
                </Botao>

                <Link style={{ textDecoration: "none", color: "black" }} to={`/sign-up`}>
                    <Legenda>Não possuí uma conta? Cadastre-se</Legenda>
                </Link>
            </Inputs>
        </>
    )
}
