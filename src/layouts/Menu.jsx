import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

function Menu() {

    const [openMenu, setOpenMenu] = useState(false);

    const styles = {
        height: '50px',
        background: 'red',
        color: 'white',
        padding: '5px',
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        borderRadius: '0px 0px 10px 10px'
    };

    return (
        <>
            <div className="menu" style={styles}>
                <div className="top-left">
                    <FaBars size={28} onClick={() => setOpenMenu(true)} />
                </div>
                <div className="top-right">

                </div>
            </div>

            <Drawer 
                anchor='left'
                variant="temporary"
                open={openMenu}
                onClose={() => setOpenMenu(false)}
            >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categorias</Link>
                    </li>
                    <li>
                        <Link to="/sair">Sair</Link>
                    </li>
                </ul>
            </Drawer>
        </>
    )
}

export default Menu;