import Register from './components/register';
import AddClient from './views/cajero/añadir-clientes';
import ClientDataTable from './views/cajero/lista-clientes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/añadir-cliente' element={<AddClient />} />
          <Route path='/lista-clientes' element={<ClientDataTable />} />
      </Routes>
    </Router>
  )
}

export default App;
