import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/content" element={<Content />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/sidebar" element={<SideBar />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
