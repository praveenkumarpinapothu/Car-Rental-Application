import { Table } from "react-bootstrap";
import { useLocation,useNavigate } from "react-router-dom";
export default function CarDetails(){
    const location=useLocation();
    const navigate=useNavigate();
    let data={
        R_num:location.state.req[0].number_plate,
        name:location.state.req[0].car_name,
        img:location.state.req[0].car_img,
        company:location.state.req[0].comapany,
        price:location.state.req[0].price

    }
    console.log(data.name);
    const send=()=>{
       navigate("/booking",{state:{data}})
    }
    return(
        <div className="container mt-4 bg-white">
            <div className="row bg-gray-300">
            <h2 className=' font-bold text-5xl mt-8 text-center my-4'> Car Details</h2>
                <div className="col-md-7 ">
                    <img  src={location.state.req[0].car_img} className="w-full h-4/5 border-solid border-r-4  border-l-4 border-violet-600" alt="car"/>
                </div>
                <div className="col-md-5 items-center text-start justify-center  h-1/2 p-4">
                <div className="text">
                    <table className="table table-borderless m-5 ">
                        <tbody>
                            <tr>
                                <th>Number Plate:</th>
                                <td>{location.state.req[0].number_plate}</td>
                            </tr>
                            <tr>
                                <th>Car Modal:</th>
                                <td>{location.state.req[0].car_name}</td>
                            </tr>
                            <tr>
                                <th>Company:</th>
                                <td>{location.state.req[0].comapany}</td>
                            </tr>
                            <tr>
                                <th>Price per day:</th>
                                <td>{location.state.req[0].price}</td>
                            </tr>
                            <tr>
                                <th><button className="btn btn-sm btn-danger" onClick={()=>navigate(-1)}>Go Back</button></th>
                                <td><button className="btn btn-sm btn-primary" onClick={send} >Book Car</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    
                </div>
               
            </div>
            
        </div>
    );
}