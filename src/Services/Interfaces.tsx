
import {Dispatch, SetStateAction} from 'react';




export interface DatosVehiculo {
    patente: string;
    marca: string;
    modelo: string;
    precio: string; 
}


export interface DatosVendedor {
    nombre: string;
    rut: string;
}



export interface FormularioProviderProps {
    children: React.ReactNode;
}

export interface FormularioData {
    nombreVendedor: string;
    rutVendedor: string;
    patenteVehiculo: string;
    marcaVehiculo: string;
    modeloVehiculo: string;
    precioVehiculo: string;
}

export interface FormularioContextType {
    datosFormulario: FormularioData[];
    setDatosFormulario: Dispatch<SetStateAction<FormularioData[]>>;
    agregarFormulario: (formulario: FormularioData) => void;
}
