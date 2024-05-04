
// import './App.scss';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./layout/Header/Header";
import './scss/style.scss';
import Home from "./Pages/Home/Home";
import MyAccount from "./Pages/MyAccount/MyAccount";
import AnotherAcount from "./Pages/AnotherAccount/AnotherAccount";
import AddPost from "./Pages/AddPost/AddPost";
import Product from "./Pages/Product/Product";
import BuisinessAccount from "./Pages/BuisinessAccount/BuisinessAccount";
function App() {
  return (
    <div className={'App'}>
      <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/myaccount' element={<MyAccount/>} />
            <Route path='/businessaccount' element={<BuisinessAccount/>} />
            <Route path='/anotheraccount' element={<AnotherAcount/>} />
            <Route path='/addpost' element={<AddPost/>} />
            <Route path='/product' element={<Product/>} />
        </Routes>
    </div>
  );
}

export default App;
