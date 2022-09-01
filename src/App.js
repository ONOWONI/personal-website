import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>howdy</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
