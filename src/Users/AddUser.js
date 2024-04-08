import React ,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();

    const [user,setUser]=useState({
        taskname:"",
        taskdesc:"",
        deadline:""
    });

    const {taskname,taskdesc,deadline}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("https://taskmanager-backend-production-e7a8.up.railway.app/user",user);
        navigate("/");
        
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2' shadow>

                <h2 className='text-center m-4'> Add Task </h2>

                <form  onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'> Task Name</label>

                    <input 
                    type='text' 
                    className='form-control'  
                    placeholder='Enter Task Name' 
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
                    placeholder='Enter Task Description' 
                    name='taskdesc' 
                    value={taskdesc}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Deadline</label>

                    <input 
                    type='text' 
                    className='form-control'  
                    placeholder='Enter Task Deadline' 
                    name='deadline' 
                    value={deadline}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <button type='submit' className='btn btn-outline-primary'>Add Task</button>

                <Link type='submit' className='btn btn-outline-danger mx-2 ' to="/">Cancel</Link>

                </form>

            </div>
        </div>
    </div>
  )
}
