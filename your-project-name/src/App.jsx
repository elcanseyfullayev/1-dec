import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact';
import Details from './pages/Details';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/> 
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/details/:id" element={<Details/>}/> 
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
