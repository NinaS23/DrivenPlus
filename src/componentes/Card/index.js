import { CardDiv , CardImg,Valor } from "./style.js"
export default function Card(props){
    return(
        <CardDiv>
            <CardImg src={props.img} alt={props.img} />
            <Valor>{props.valor}</Valor>
        </CardDiv>
    )
}