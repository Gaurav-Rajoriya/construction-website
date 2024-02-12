import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Footer from './Component/Footer/Footer';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';

function App() {
  return (

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} /> 
          <Route path='/service' element={<Service/>} /> 
          <Route path='/contact' element={<Contact/>} /> 
          <Route path='/testimonial' element={<Testimonial/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
