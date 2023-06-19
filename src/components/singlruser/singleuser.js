import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from "axios";

const View =() =>{
    const [user,setUser]= useState({});

    const{id}  =useParams();
    useEffect(()=>{
        axios
        .get(`http://localhost:3305/singledata/${id}`)
        .then((resp)=> setUser({ ...resp.data[0]}));

    },[id]);
return (
        <>
            <div className='land'>
                <h1 className='text-info'>Employee Description</h1>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg' alt="no pic" className='container-fluid' /></div>
                 
                                <div className='col-lg-6 text-start m-5'>
                                    <h2>Id:   <span className=''>{id}</span></h2>
                                    <h2>Name:    <span >{user.name}</span></h2>
                                    <h2>job:<span className='ms-4'>{user.job}</span></h2>
                                    <h2>Gender:    <span className='ms-5 '>{user.gender}</span> </h2>
                                    <h2>Hiredate: <span className='ms-3 w-25'>{user.hire_date}</span> </h2>
                                    <h2>Salary: <span className='-5'>{user.salary}</span> </h2>
                                    <Link to='/'>
                                        <button className='btn btn-edit bg-primary mt-5'>Go Back</button>
                                    </Link>
                                </div>
                        </div>
                    </div>
        </>);
}
export default View;



