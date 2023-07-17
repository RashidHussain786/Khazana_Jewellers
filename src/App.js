import './App.css';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHomePage from './Pages/AdminPage/AdminHomePage';
import AddJewelleryPage from './Pages/AdminPage/AddJewelleryPage';
import UpdateJewelleryPage from './Pages/AdminPage/UpdateJewelleryPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<HomePage/>} /> 
    <Route exact path="/login" element={<Login/>} /> 
    <Route exact path="/signup" element={<Signup/>} /> 
    <Route exact path="/product" element={<ProductPage/>} /> 
    <Route exact path="/admin" element={<AdminHomePage/>} /> 
    <Route exact path="/addJewellery" element={<AddJewelleryPage/>} /> 
    <Route exact path="/updateJewellery/:id" element={<UpdateJewelleryPage/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
