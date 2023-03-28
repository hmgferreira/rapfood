import { BrowserRouter, Routes, Route, useNavigate, HashRouter } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from "../pages/Products";

import IndexProducts from '../pages/Products/IndexProducts';
import FormProducts from '../pages/Products/FormProducts';
import DefaultLayout from "../layouts/DefaultLayout";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function AppRoutes() {
    
    const lista = [
        {
            path: '/',
            element: <Home />,
            hasLayout: true,
            isPrivate: false,
        },
        {
            path: '/login',
            element: <Login />,
            hasLayout: false,
            isPrivate: false,
        },
        {
            path: '/products',
            element: <IndexProducts />,
            hasLayout: true,
            isPrivate: true,
        },
        {
            path: '/products/new',
            element: <FormProducts />,
            hasLayout: true,
            isPrivate: true,
        },
    ];

    function getLayout(item) {


        if(item.hasLayout) {
            return (
                <DefaultLayout isPrivate={item.isPrivate}>
                    {item.element}
                </DefaultLayout>
            )
        } else {
            return item.element;
        }
    }

    return (
        
        <HashRouter>
            <Routes>
                {lista.map((item, indice) => (
                     <Route key={indice} path={item.path} element={getLayout(item)} />
                ))}

                {/* <Route path="/" element={
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                } />
                <Route path="/products" element={<IndexProducts />} />
                <Route path="/products/new" element={<FormProducts />} /> */}
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;