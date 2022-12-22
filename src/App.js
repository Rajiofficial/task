import './App.css';
import Add from './Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import "./Home.css"
// import { Axios } from 'axios';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
