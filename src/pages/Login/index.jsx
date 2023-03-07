import { Avatar, Button, Checkbox, FormControlLabel, Grid, stepClasses, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../config/api';
import message from '../../config/message';

function Login() {

    const navigate = useNavigate();

    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');
    
    async function handleSubmit() {
        const response = await api.get("users", {
            params: {
                email: login
            }
        });
        const data = response.data;
        if(data.length > 0) {
            const user = data[0];
            if(user.password === senha) {
                message.success("Login efetuado com sucesso.");
                navigate('/');
            } else {
                message.error('Login ou senha Incorreto');
            }
        }
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        if(name === 'email') {
            setLogin(value);
        }

        if(name === 'password') {
            setSenha(value);
        }
    }
    
    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Acessar
                </Typography>
                <Box component="form" onSubmit={null} noValidate sx={{ mt: 1 }}>
                    {login} - {senha}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Acessar
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Esqueceu sua senha?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default Login;