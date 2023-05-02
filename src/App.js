import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import ViewCars from './components/user pages/ViewCars';
import Status from './components/user pages/statusPage';
import History from './components/user pages/historyPage';
import CarDetails from './components/singleCar';
import BookCar from './components/booking';
import Login from './components/login';
import Payment from './payment';
import Dashboard from './components/user pages/userDashBoard';

function App() {
  return (
    <div>
     <Login/>
     {/* <DatePicker/> */}
    </div>
  );
}

export default App;
