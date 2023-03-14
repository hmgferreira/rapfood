import { Button, Grid, Table, TableRow, TableCell, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../config/api';
import message from '../../config/message';
function IndexProducts() {

    const navigate = useNavigate();
    const[lista, setLista] = useState([]);

    async function getLista() {
        const response = await api.get('products');
        setLista(response.data);
    }
    
    async function deletarRegistro(item) {
        const check = await message.confirmation("Deseja deletar esse registro?");
        if(check) {
            await api.delete('products/'+item.id);
            message.success("Registro deletado com sucesso.");
            getLista();
        }
    }

    useEffect(() => {
        getLista();
    }, []);

    return (
        <>
            <h3>Produtos</h3>
            <Grid container>
                <Grid item xs={10}>
                    <TextField 
                        margin="normal"
                        name="pesquisa"
                        id="pesquisa"
                        // placeholder="Pesquise"
                        size="small"
                        label="Pesquise"
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={() => navigate('/products/new')}>Novo Produto</Button>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Table>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                        {lista.map((item, indice) => (
                            <TableRow key={indice}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>R$ {item.price}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>
                                    <Button variant="outlined">Editar</Button>
                                    <Button variant="outlined" color="error" onClick={() => deletarRegistro(item)}>Excluir</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        
                    </Table>
                </Grid>
            </Grid>
        </>
    );
}

export default IndexProducts;