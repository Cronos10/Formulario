import React, { createContext, useState } from 'react';
import { FormularioProviderProps, FormularioData, FormularioContextType } from '../Services/Interfaces';

// Creación del FormularioContext
export const FormularioContext = createContext<FormularioContextType | null>(null);

export const FormularioProvider: React.FC<FormularioProviderProps> = ({ children }) => {
    const [datosFormulario, setDatosFormulario] = useState<FormularioData[]>([]);

    const agregarFormulario = (nuevoFormulario: FormularioData) => {
        setDatosFormulario(prevFormularios => [...prevFormularios, nuevoFormulario]);
    };

    return (
        <FormularioContext.Provider value={{ datosFormulario, setDatosFormulario, agregarFormulario }}>
            {children}
        </FormularioContext.Provider>
    );
};
