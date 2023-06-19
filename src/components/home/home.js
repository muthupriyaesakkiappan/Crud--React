
import React, { useEffect, useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
function Home(){
   const [details, setDetails] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3305/get')
        .then(res => setDetails(res.data))
        .catch(err=> console.log(err));
    },[])

 const handleDelete = async (id) =>{
     try{
        await axios.delete('http://localhost:3305/delete/'+id)
        window.location.reload()
        alert("Employee deleted successfully")
     }catch(err){
        console.log(err);
     }
        
    }

    return(
        <>
    <div className="d-flex vh-100 bg-primary justify-content-center align-center ">
    <div className=" bg-white rounded mt-5 p-3">
        <Link to='/create' className="btn btn-success mt-5">Add</Link>
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Gender</th>
                    <th>Hire Date</th>
                    <th>Salary</th>
                    <th>Action</th> 

                </tr>
            </thead>
            <tbody>
            {details.map((data,index)=>(
                <>
                <tr>
                    <td>{data.id}</td>
                   <td>{data.name}</td>
                   <td>{data.job}</td>
                   <td>{data.gender}</td>
                   <td>{data.hire_date}</td>
                   <td>{data.salary}</td>
                    <td>
                        <Link to={`/View/${data.id}`} className="btn btn-primary ms-2">View</Link>
                        <Link to={`/Edit/${data.id}`} className=" btn btn-primary ms-2" >Edit</Link>
                        <button className="btn btn-danger ms-2" onClick={ () => handleDelete (data.id)}>Delete</button>
                    </td>
                </tr>
                </>
              ))
              } 
            </tbody>
        </table>
    </div>
    </div>
   </>
    );
   
}

export default Home;