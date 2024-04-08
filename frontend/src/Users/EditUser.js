import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate(); 

    const {id}=useParams();
    const [user,setUser]=useState({
        taskname:"",
        taskdesc:"",
        deadline:""
    });

    const {taskname,taskdesc,deadline}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`https://taskmanager-backend-production-e7a8.up.railway.app/${id}`,user);
        navigate("/");
        
    }

    const loadUser=async()=>{
        const result=await axios.get(`https://taskmanager-backend-production-e7a8.up.railway.app/user/${id}`);
        setUser(result.data);
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2' shadow>

                <h2 className='text-center m-4'> Edit Task </h2>

                <form  onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Task Name</label>

                    <input 
                    type='text' 
                    className='form-control'  
                    placeholder='Enter your Name' 
                    name='taskname'
                    value={taskname}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Task Description</label>

                    <input 
                    type='text' 
                    className='form-control'  
                    placeholder='Enter your username' 
                    name='taskdesc' 
                    value={taskdesc}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Task Deadline</label>

                    <input 
                    type='text' 
                    className='form-control'  
                    placeholder='Enter your Email address' 
                    name='deadline' 
                    value={deadline}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <button type='submit' className='btn btn-outline-primary'>Edit Task</button>

                <Link type='submit' className='btn btn-outline-danger mx-2 ' to="/">Cancel</Link>

                </form>

            </div>
        </div>
    </div>
  )
}
