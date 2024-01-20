// import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Entel from '../IMG/Entel.png';

const Navbar = () => {
    return (
        <AppBar position="static"  sx={{ borderRadius: '10px', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',backgroundColor:'#ffff', }}>
            <Toolbar >
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'  }} >
                    <img src={Entel} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button  component={RouterLink} to="/Formulario" sx={{textTransform: 'none' }}>
                        Formulario
                    </Button>
                    <Button  component={RouterLink} to="/Lista-formularios" sx={{textTransform: 'none' }}>
                        Lista de Formularios
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
