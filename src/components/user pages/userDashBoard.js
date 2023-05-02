import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Header';
import ViewCars from './ViewCars';
import Status from './statusPage';
import History from './historyPage';
import CarDetails from '../singleCar';
import BookCar from '../booking';
import Payment from '../../payment';
import Login from '../login';
// import Login from './components/login';
function Dashboard() {
  return (
    <div>
     <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<ViewCars />} />
          <Route path="/statusPage" element={<Status />} />
          <Route path="/historyPage" element={<History />} />
          <Route path="/singleCar" element={<CarDetails/>} />
          <Route path="/booking" element={<BookCar/>} />
          <Route path="/payments" element={<Payment/>} />
          
        </Routes>
        {/* <BookCar/> */}
        {/* <Login/> */}
    </BrowserRouter>
    </div>
  );
}

export default Dashboard;
