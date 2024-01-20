import axios from 'axios';
import { DatosVehiculo, DatosVendedor } from '../Services/Interfaces';

// Función para enviar datos a la tabla Vendedor
export const enviarDatosVendedor = async (datosVendedor: DatosVendedor) => {
    try {
        const response = await axios.post('/api/Vendedor', datosVendedor);
        return response.data;
    } catch (error) {
        console.error('Error al enviar datos del vendedor:', error);
        throw error;
    }
};

// Función para enviar datos a la tabla Vehiculo
export const enviarDatosVehiculo = async (datosVehiculo: DatosVehiculo) => {
    try {
        const response = await axios.post('/api/Vehiculo', datosVehiculo);
        return response.data;
    } catch (error) {
        console.error('Error al enviar datos del vehículo:', error);
        throw error;
    }
};
