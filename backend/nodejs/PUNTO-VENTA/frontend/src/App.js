import Register from './components/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/registro' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;
