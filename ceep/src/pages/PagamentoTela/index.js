import logoVerde from "../../assets/Group 3.png"
import lista from "../../assets/lista.png"
import dinheiro from "../../assets/grana.png"
import { CentroLogo, IMG, Logo, Centralizar, Legenda, LadoALado } from "./style.js";
export default function PagamentoTela() {
    return (
        <>
            <CentroLogo>
                <Logo src={logoVerde} alt="letra D" />
            </CentroLogo>
            <Centralizar>
                <LadoALado>
                    <IMG src={lista} alt="lista rosa" />
                    <Legenda>beneficios</Legenda>
                </LadoALado>
                <Legenda>1.Brindes exclusivos</Legenda>
                <Legenda>2.Materiais bônus de web</Legenda>
                <LadoALado style={{marginTop:"12px"}}>
                    <IMG src={dinheiro} alt="dinheiro" />
                    <Legenda>Preço</Legenda>
                </LadoALado>
                <Legenda>R$ 39,99 cobrados mensalmente</Legenda>
            </Centralizar>
        </>

    )
}