
import { useState } from "react";
import { CentroLogo, IMG, Logo, Centralizar, Legenda, LadoALado, Input,AfastarBorda,InputMenor,LadoALadoInput,Apertar } from "./style.js";
import logoVerde from "../../assets/Group 3.png"
import lista from "../../assets/lista.png"
import dinheiro from "../../assets/grana.png"

export default function PagamentoTela() {
    const [nomeCard, setNomeCard] = useState("");
    const [digitos, setDigitos] = useState("");
    const [codigo, setCodigo] = useState("");
    const [validade, setValidade] = useState("");

    function EnviarValue(e) {
        e.preventDefault()
    }

    return (
        <>

            <CentroLogo style={{ marginTop: "30%", marginBottom: "5%" }} >
                <Logo src={logoVerde} alt="letra D" />
            </CentroLogo>
            <Centralizar>
                <LadoALado>
                    <IMG src={lista} alt="lista rosa" />
                    <Legenda>beneficios</Legenda>
                </LadoALado>
                <Legenda>1.Brindes exclusivos</Legenda>
                <Legenda>2.Materiais bônus de web</Legenda>
                <LadoALado style={{ marginTop: "12px" }}>
                    <IMG src={dinheiro} alt="dinheiro" />
                    <Legenda>Preço</Legenda>
                </LadoALado>
                <Legenda>R$ 39,99 cobrados mensalmente</Legenda>

            </Centralizar>
            <AfastarBorda>
                <Input style={{MarginTop: "34px"}}
                    placeholder="Nome impresso no cartão"
                    value={nomeCard}
                    onChange={(e) => setNomeCard(e.target.value)}
                />
                <Input
                    placeholder="Digitos do cartão"
                    value={digitos}
                    onChange={(e) => setDigitos(e.target.value)}
                />
                <LadoALadoInput>
                <InputMenor
                    placeholder="Código de segurança"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}

                />
                <InputMenor
                    placeholder="Validade"
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                />
                </LadoALadoInput>
                <Apertar>
                 <Legenda>Assinar</Legenda>
                </Apertar>
                   
       
            </AfastarBorda>

        </>

    )
}