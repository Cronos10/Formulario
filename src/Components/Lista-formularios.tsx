import { useContext, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    IconButton,
    Grid,
    TablePagination
} from '@mui/material';
import Eliminar from '../IMG/Eliminar.png';
import { FormularioContext } from './ContextFormulario';

const ListaFormulario = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const contexto = useContext(FormularioContext);
    if (!contexto) {
        return <div>El contexto no está disponible</div>;
    }

    const { datosFormulario } = contexto;


    // Manejadores para la paginación
    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Grid container justifyContent="center" sx={{ mt: '30px', borderRadius: '30px' }}>
            <TableContainer component={Paper} elevation={0} sx={{ width: 'auto', margin: 'auto', overflowX: 'initial' }}>
                <Typography variant="h4" component="h3" gutterBottom align="center">
                    Lista formulario
                </Typography>
                <Typography variant="body1" gutterBottom align="center">
                    Tabla de Soliciudes 
                </Typography>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ '& > th': { borderBottom: "none" } }}>
                            <TableCell >Nombre</TableCell>
                            <TableCell align="right" >Rut vendedor</TableCell>
                            <TableCell align="right" >Patente vehículo</TableCell>
                            <TableCell align="right" >Marca vehículo</TableCell>
                            <TableCell align="right" >Modelo vehículo</TableCell>
                            <TableCell align="right" >Color vehículo</TableCell>
                            <TableCell align="right" >Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
            {(rowsPerPage > 0
                ? datosFormulario.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : datosFormulario
            ).map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{ borderBottom: "none" }}>
                                <TableCell component="th" scope="row">{row.nombreVendedor}</TableCell>
                                <TableCell align="right">{row.rutVendedor}</TableCell>
                                <TableCell align="right">{row.patenteVehiculo}</TableCell>
                                <TableCell align="right">{row.marcaVehiculo}</TableCell>
                                <TableCell align="right">{row.modeloVehiculo}</TableCell>
                                {/* <TableCell align="right">{row.color}</TableCell> */}
                                <TableCell align="right">
                                    <IconButton aria-label="delete" onClick={() => alert('Eliminar')}>
                                        <img src={Eliminar} alt="delete" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
            ))}
        </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={datosFormulario.length} 
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelDisplayedRows={({ from, to, count }) => `Mostrando registros del ${from} al ${to} de un total de ${count} registros`}
                    labelRowsPerPage=""
                />
            </TableContainer>
        </Grid>
    );
};

export default ListaFormulario;
