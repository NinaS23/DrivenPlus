import AppProvider from "./contexts/provider";
import TelaLogin from "./pages/Login"
import TelaCadastro from "./pages/Cadastro"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/reset.css"
import "./CSS/style.css"
import Subscription from "./pages/subscription";
import PagamentoTela from "./pages/PagamentoTela";

export default function App() {
    return (
      
            <AppProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TelaLogin />} />
                        <Route path="/sign-up" element={<TelaCadastro />} />
                        <Route path="/subscriptions" element={<Subscription />} />
                        <Route path="/subscription/:planoId" element={<PagamentoTela />} />
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        
    )
}