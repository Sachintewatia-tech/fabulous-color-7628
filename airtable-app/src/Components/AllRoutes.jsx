import React from "react";
import {Route,Routes,Link} from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
function AllRoute(){
    return(
        <div>
            {/* <div>
                <Link to='/' >Home</Link>
                <Link to='/signup' >Signup</Link>
            </div> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<Signup/>} ></Route>
                <Route path="/login" element={<Login/>} ></Route>
            </Routes>
        </div>
    )
}
export default AllRoute;