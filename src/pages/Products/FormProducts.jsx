import { Button, Grid, Table, TableRow, TableCell, TextField } from "@mui/material";
import { Formik, ErrorMessage } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../config/api';
import message from '../../config/message';
import * as Yup from 'yup';
import AuthContext from "../../contexts/AuthContext";

function FormProducts() {

    const navigate = useNavigate();
    
    async function salvar(values) {
        await api.post('products', values);
        message.success("Produto criado com sucesso.");
        navigate('/products');
    }

    const schemaValidation = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório").min(5, "Deve ter no minimo 5 caracteres"),
        price: Yup.string().required("Campo obrigatório"),
        amount: Yup.string().required("Campo obrigatório").max(5, 'Deve ter no máximo 5 caracteres'),
        description: Yup.string().required("Campo obrigatório"),
    });

    return (
        <>
            <h3>Formulário de Produto</h3>
            <Formik 
                initialValues={{
                    name: '',
                    price: '',
                    amount: '',
                    description: ''
                }}
                validationSchema={schemaValidation}
                onSubmit={(values) => {
                    salvar(values);
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <TextField 
                            id="name"
                            name="name"
                            margin="normal"
                            label="Nome"
                            fullWidth
                            size="small"
                            onChange={props.handleChange}
                        />
                        <span className="error-v">
                            <ErrorMessage name="name" />
                        </span>
                        <TextField 
                            id="price"
                            name="price"
                            margin="normal"
                            label="Preço"
                            fullWidth
                            size="small"
                            onChange={props.handleChange}
                        />
                         <ErrorMessage name="price" />
                        <TextField 
                            id="amount"
                            name="amount"
                            margin="normal"
                            label="Quantidade"
                            fullWidth
                            size="small"
                            onChange={props.handleChange}
                        />
                         <ErrorMessage name="amount" />
                        <TextField 
                            id="description"
                            name="description"
                            margin="normal"
                            label="Descrição"
                            fullWidth
                            multiline
                            maxRows={4}
                            onChange={props.handleChange}
                        />
                         <ErrorMessage name="description" />
                        <Button variant="contained" onClick={props.handleSubmit}>Salvar</Button>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default FormProducts;