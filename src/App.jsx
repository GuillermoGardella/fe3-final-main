
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from './Routes/Contact';
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/recipe/:id' element={<Detail/>}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/favs' element={<Favs/>}/>          
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
