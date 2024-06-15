import Register from './components/register';
import AddClient from './views/añadir-clientes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/añadir-cliente' element={<AddClient />} />
      </Routes>
    </Router>
  )
}

export default App;
