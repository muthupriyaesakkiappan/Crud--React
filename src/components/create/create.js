import React from "react";
// import './register.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Create()
{
    const navigate = useNavigate();
    const validate=()=>{
            var name = document.getElementById("name").value;
            var gender= document.getElementById("gen").value;
            var job=document.getElementById("job").value;
            var hire_date= document.getElementById("hire").value;
            var salary= document.getElementById("salary").value;
            if(name==" " || name==null )
            {
                alert("please enter the name");
            }
            
            else if(gender=="" || gender==null)
            {
                alert("please fill the gender");
            }
           
            else if(job=="" || job==null)
            {
                alert("please enter the job");
            }
            else if(hire_date=="" || hire_date==null)
            {
                alert("please enter the date");
            }
            else if(salary=="" || salary==null)
            {
                alert("please enter the salary");
            }
                     let  userInfo=
                    {
                        "name":name,
                        "gender":gender,
                        "job":job,
                        "hire_date":hire_date,
                        "salary":salary
                    }
                axios.post('http://localhost:3305/add',userInfo).then((res) => {
                console.log(res);
                if(res.data.userId){
                  alert("successfully login")
                }
                else{
                    alert("There is no user")
                }
                navigate('/')
                }).catch((err) => {
                console.log(err);
                })
             }
    return(
        <>   
      <div class="container-fluid data ">
       
      <h1 class="align-center reghead mt-3">Updatation Form</h1>
        <form>
            
            <label className="w-25 p-3">Name:</label>
            <input type="text" placeholder="Name" id="name"  className="mt-5 p-2"/><br/>
            <label className="w-25 p-3">Job:</label>
            <input type="text" placeholder="Gender" id="gen" className="p-2" /><br/>
            <label className="w-25 p-3">Gender:</label>
            <input type="text" placeholder="Job" id="job"  className="p-2" /><br/>
            <label className="w-25 p-3">Hire date:</label>
            <input type="text" placeholder="Hire Date" id="hire" className="p-2"/><br/>
            <label className="w-25 p-3">Salary:</label>
            <input type="text" placeholder="Salary" id="salary" className="p-2" /><br/><br/>
            <button type="button" className="btn btn-primary regbut" onClick={validate}>Submit</button>
        </form>
      </div>
        </>
        
    );

    }