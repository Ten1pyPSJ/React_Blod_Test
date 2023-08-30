import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Nav/Header"
import Home from "./Component/Home"
import Create from "./Component/Create"
import Blog from "./Component/Blog";

function App() {
  

  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path="/:id" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;