import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='work' element={<div>work</div>} />
        <Route path='skills' element={<div>skills</div>} />
        <Route path='contact' element={<div>contact</div>} />
        <Route path='*' element={<div>Error 404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
