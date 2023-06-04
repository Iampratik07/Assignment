import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Fasion from "./Pages/Fasion";
import News from "./Pages/News";
import Product from "./Pages/Product";




function App() {
  return (
   
      <BrowserRouter>
      <Routes>
        <Route index path="/"  element={<><Header/> <Home/> <Footer/></>}></Route>
        <Route path="/about"  element={<><Header/> <About/> <Footer/></>}></Route>
        <Route path="/Contact"  element={<><Header/> <Contact/> <Footer/></>}></Route>
        <Route path="/fashion"  element={<><Header/> <Fasion/> <Footer/></>}></Route>
        <Route path="/news"  element={<><Header/> <News/> <Footer/></>}></Route>
        <Route path="/products"  element={<><Header/> <Product/> <Footer/></>}></Route>
        
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
