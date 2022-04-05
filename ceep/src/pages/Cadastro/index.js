import Input from "../../componentes/Inputs"
import { useState } from "react"
export default function TelaCadastro() {
    const [email, setEmail] = useState("")
    return (
        <>
            <Input
                legenda={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />

        </>
    )
}