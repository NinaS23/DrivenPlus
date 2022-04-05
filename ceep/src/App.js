import TelaLogin from "./pages/Login"
import TelaCadastro from "./pages/Cadastro"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/reset.css"
import "./CSS/style.css"
export default function App(){
    return(
     <>
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<TelaLogin/>} />
      <Route path="/sign-up" element={<TelaCadastro/>} />
      </Routes>
    </BrowserRouter>
     </>
    )
}