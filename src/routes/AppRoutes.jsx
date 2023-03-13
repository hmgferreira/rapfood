import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';

import IndexProducts from '../pages/Products/IndexProducts';
import FormProducts from '../pages/Products/FormProducts';
import DefaultLayout from "../layouts/DefaultLayout";

function AppRoutes() {

    const lista = [
        {
            path: '/',
            element: <Home />,
            hasLayout: true
        },
        {
            path: '/login',
            element: <Login />,
            hasLayout: false
        },
        {
            path: '/products',
            element: <IndexProducts />,
            hasLayout: true
        },
        {
            path: '/products/new',
            element: <FormProducts />,
            hasLayout: true
        },
    ];

    function getLayout(item) {
        if(item.hasLayout) {
            return (
                <DefaultLayout>
                    {item.element}
                </DefaultLayout>
            )
        } else {
            return item.element;
        }
    }

    return (
        
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default AppRoutes;