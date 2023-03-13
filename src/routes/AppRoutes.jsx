import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from "../pages/Products";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;