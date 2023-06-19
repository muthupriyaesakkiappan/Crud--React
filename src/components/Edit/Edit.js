
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export function Edit() {
    let { id } = useParams();
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [gender, setGender] = useState('');
    const [hire_date, setHiredate] = useState('');
    const [salary, setSalary] = useState('');
    useEffect(() => {
        //fetch data from data base using id
        fetch("http://localhost:3305/edits/" + id + '')
            .then(res => res.json())
            .then((res) => {
                setName(res[0].name);
                setJob(res[0].job);
                setGender(res[0].gender);
                setHiredate(res[0].hire_date);
                setSalary(res[0].salary);
            })
        console.log(name)
    }, [])

    const updates = async (event) => {
        event.preventDefault();
        var config = { header: { "enctype": "multipart/form-data" } };
        //Insertion  API  after update  (update)
        await axios.put('http://localhost:3305/updateuser/' + id + '', { name,job,gender,hire_date,salary })
            .then((res) => {
                if (res.data.status === "error") {
                    alert("error");
                    window.location.reload();
                }
                else if (res.data.status === "success") {
                    alert("updated");
                    window.location.href = "/";
                }
            }, [])
            .catch((error) => {
                alert("API NOT Called")
            })

    }
    return (<>

        <div>
            <h1 className="text-center">Updatation Form</h1>
            <div className="  lands  mt-5" style={{ paddingLeft: '' }}>
                <form onSubmit={updates}>
                    <label className="w-25 p-3"> Name</label>
                    : <input type="text" id="name" name="name" className=" p-2" value={name} onChange={(e) => setName(e.target.value)} required /><span id="span_name" ></span><br />
                    <label className="w-25 p-3">Job</label>
                    : <input type="text" id="job"  className=" p-2" value={job} onChange={(e) => setJob(e.target.value)} required /><br />
                    <label className="w-25 p-3">Gender</label>
                    : <input type="text" id="gender"  className=" p-2" value={gender} onChange={(e) => setGender(e.target.value)} required /><br />
                    <label className="w-25 p-3">Hire date</label>
                    : <input type="tel" id="hire_date" className=" p-2" value={hire_date} onChange={(e) => setHiredate(e.target.value)} required /><br />
                    <label className="w-25 p-3">Salary</label>
                    : <input type="text" id="salary"  className="p-2" value={salary} onChange={(e) => setSalary(e.target.value)} required /><br />
                    <button className='btn btn-primary' >Submit</button>
                </form>
            </div>
        </div>

    </>);
}

