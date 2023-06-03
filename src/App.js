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
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<><Header/> <Home/> <Footer/></>}></Route>
        <Route path="/About" index element={<><Header/> <About/> <Footer/></>}></Route>
        <Route path="/Contact" index element={<><Header/> <Contact/> <Footer/></>}></Route>
        <Route path="/Fasion" index element={<><Header/> <Fasion/> <Footer/></>}></Route>
        <Route path="/News" index element={<><Header/> <News/> <Footer/></>}></Route>
        <Route path="/Product" index element={<><Header/> <Product/> <Footer/></>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
