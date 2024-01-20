import React, { useContext}  from 'react';
import { Container, Grid, Typography, Divider, TextField, Button } from '@mui/material';
import Laptop from '../IMG/Laptop.png';
import { enviarDatosVendedor, enviarDatosVehiculo } from '../Services/server';
import { useState } from 'react';
import { FormularioContext } from './ContextFormulario';



const Formulario = () => {

    const [nombreVendedor, setNombreVendedor] = useState('');
    const [rutVendedor, setRutVendedor] = useState('');
    const [patenteVehiculo, setPatenteVehiculo] = useState('');
    const [marcaVehiculo, setMarcaVehiculo] = useState('');
    const [modeloVehiculo, setModeloVehiculo] = useState('');
    const [precioVehiculo, setPrecioVehiculo] = useState('');
    
    const contexto = useContext(FormularioContext);
    if (!contexto) {
        return <div>El contexto no está disponible</div>;
    }

    const { agregarFormulario } = contexto;


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const datosVendedor = {
            nombre: nombreVendedor,
            rut: rutVendedor,
        };

        const datosVehiculo = {
            patente: patenteVehiculo,
            marca: marcaVehiculo,
            modelo: modeloVehiculo,
            precio: precioVehiculo,
        };

        try {
            await enviarDatosVendedor(datosVendedor);
            await enviarDatosVehiculo(datosVehiculo);

            agregarFormulario({
                nombreVendedor,
                rutVendedor,
                patenteVehiculo,
                marcaVehiculo,
                modeloVehiculo,
                precioVehiculo
            });
        } catch (error) {
            console.log('error al cargar los datos', error);
        }
    };
    return (
        <Container maxWidth="lg" component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ color: '#002EFF' }}>
                        Formulario de Prueba
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        Nuevo formulario
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Relleno los campos necesarios para su nuevo formulario.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={Laptop} alt='Laptop' style={{ maxWidth: '100%', height: 'auto' }} />
                    <Divider sx={{ marginY: 2 }} />
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs>
                    {/* Datos del vendedor */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                        <TextField
                    fullWidth
                    label="Nombre Vendedor"
                    variant="outlined"
                    value={nombreVendedor}
                    onChange={(e) => setNombreVendedor(e.target.value)}
                />
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <TextField
                    fullWidth
                    label="Rut Vendedor"
                    variant="outlined"
                    value={rutVendedor}
                    onChange={(e) => setRutVendedor(e.target.value)}
                />
                        </Grid>
                    </Grid>
                    <Divider sx={{ marginY: 2 }} />
                    {/* Datos del vehículo */}
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Datos del vehículo:
                    </Typography>
                    <Grid container spacing={2}>
                    <Grid item xs={4} >
                    <TextField
                    fullWidth
                    label="Patente Vehiculor"
                    variant="outlined"
                    value={patenteVehiculo}
                    onChange={(e) => setPatenteVehiculo(e.target.value)}
                />
                        </Grid>
                        <Grid item xs={4} >
                        <TextField
                    fullWidth
                    label="Marca Vehiculo"
                    variant="outlined"
                    value={marcaVehiculo}
                    onChange={(e) => setMarcaVehiculo(e.target.value)}
                />
                        </Grid>
                        <Grid item xs={4} >
                        <TextField
                    fullWidth
                    label="Modelo Vehiculo"
                    variant="outlined"
                    value={modeloVehiculo}
                    onChange={(e) => setModeloVehiculo(e.target.value)}
                />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField
                    fullWidth
                    label="Precio Vehioculo"
                    variant="outlined"
                    value={precioVehiculo}
                    onChange={(e) => setPrecioVehiculo(e.target.value)}
                />
                        </Grid>
                    </Grid>
                    <Divider sx={{ marginY: 2 }} />

                    {/* Botón de enviar */}
                    <Grid item xs={12} sx={{ mt: 2.5, display: 'flex', justifyContent: 'Flex-end' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#002EFF',
                                borderRadius: '20px',
                                color: '#fff',
                                textTransform: 'none',
                                width: { xs: '100%', sm: 'auto' },
                                maxWidth: { sm: '300px' },
                                p: '10px 24px',
                            }}
                        >
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};


export default Formulario;


