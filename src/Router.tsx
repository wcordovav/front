import { FC } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    // HashRouter
} from "react-router-dom";
import NigthBeyond from "./pages/landings/night-beyond05abr22";
import PremiumService from "./pages/landings/premium-service20abr22";


const Router:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PremiumService/>} />
                <Route path="/beyond" element={<NigthBeyond/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router