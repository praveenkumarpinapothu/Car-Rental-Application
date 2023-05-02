import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import './cars.css';
export default function ViewCars(){
    const cars=[{
        id:1,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75",
        car_name:"Fronx",
        comapany:"Maruti Suzuki",
        number_plate:"AP05 TD 8899",
        price:"Rs.1800"
    },{
        id:2,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:"Cruz",
        comapany:"Maruti Suzuki",
        number_plate:"AP05 TG 8099",
        price:"Rs.2800"
    },{
        id:3,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:"Creta",
        number_plate:"AP05 EX 9899",
        comapany:"Hyundai",
        price:"Rs.2500"
    },{
        id:4,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75",
        car_name:"Scorpio",
        comapany:"Mahindra ",
        number_plate:"AP05 VG 6799",
        price:"Rs.2000"
    },{
        id:5,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/141121/venue-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:"Venue",
        comapany:"Hyundai  ",
        number_plate:"AP05 HU 7767",
        price:"Rs.2000"
    },{
        id:6,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:"XUV700",
        comapany:"Mahindra",
        number_plate:"AP05 YS 6699",
        price:"Rs.1700"
    },{
        id:7,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/32597/altroz-exterior-right-front-three-quarter-79.jpeg?isig=0&q=75",
        car_name:"Altroz",
        comapany:"Tata",
        number_plate:"AP05 MD 4455",
        price:"Rs.1800"
    },{
        id:8,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/142739/harrier-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
        car_name:"Harrier",
        comapany:"Tata",
        number_plate:"AP05 UH 8779",
        price:"Rs.3500"
    },{
        id:9,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:"Verna",
        comapany:"THyundai",
        number_plate:"AP05 CD 8789",
        price:"Rs.2300"
    },{
        id:10,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/144681/virtus-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:" Virtus",
        comapany:"VoksWagen",
        number_plate:"AP05 XY 0099",
        price:"Rs.2200"
    },{
        id:11,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/130583/hector-facelift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75",
        car_name:"Virtus",
        comapany:"VoksWagen",
        number_plate:"AP05 XY 0099",
        price:"Rs.1500"
    },{
        id:12,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/134287/2023-city-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:"Virtus",
        comapany:"VoksWagen",
        number_plate:"AP05 XY 0099",
        price:"Rs.3000"
    },{
        id:13,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/142865/safari-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
        car_name:"SAFARI",
        comapany:"VoksWagen",
        number_plate:"AP05 XY 0099",
        price:"Rs.2500"
    },{
        id:14,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/144999/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name:"SLAVIA",
        comapany:"Skoda",
        number_plate:"AP05 PO 0099",
        price:"Rs.1000"
    },{
        id:15,
        car_img:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
        car_name:"Hector",
        comapany:"MG",
        number_plate:"AP05 PY 0099",
        price:"Rs.2000"
    }
]
const navigate=useNavigate();
const handle=(id)=>{
    const req=cars.filter((car)=>{
        if(car.id==id)
        {
            return car;
        }
    })
 
    navigate("/singleCar",{state:{req}})
}
    return(
        <div className=" container-fluid items-center justify-center text-center ">
      <div>
      <h2 className=' font-bold text-5xl mt-8 bg-clip-text text-transparent bg-red-800' id='anim'>Available Cars</h2>
      <div>
      </div>
      <section className='px-10 py-10'>
       <div className='' id='main'>
       {cars.map((car)=>{
          return(
            <article className='bg-slate-900 p-4  h-full rounded-xl '>
              <img src={car.car_img} alt={car.car_name} className='rounded h-auto w-full brightness-100 transition ease-in-out delay-150 hover:scale-90 hover:-translate-y-1 hover:brightness-50 transition-all' />
              <div className='py-3 text-justify space-y-3 text-white'>
                <figcaption className='text-2xl font-bold'>{car.car_name}{car.comapany}</figcaption>
                <p>{car.number_plate}</p>
                <button className="btn text-xl font-bold bg-teal-600 hover:text-white hover:bg-sky-700 w-full" onClick={()=>handle(car.id)}>Rent Car</button>
              </div>
            </article>
          )
        })}
       </div>
      </section>
      </div>
    </div>
    );
}