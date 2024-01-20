
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/theme';
import Navbar from './Components/Navbar';
import ListaFormularios from './Components/Lista-formularios';
import Formulario from './Components/Formulario';
import { FormularioProvider } from './Components/ContextFormulario';

const App = () => {
  return (
    <FormularioProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/lista-formularios" element={<ListaFormularios />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </FormularioProvider>
  );
};

export default App;
