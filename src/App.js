import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/Footer';
import Error from './components/error';

function App() {
  return (
    <BrowserRouter>
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='work' element={<Work />} />
        <Route path='skills' element={<Skills />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

