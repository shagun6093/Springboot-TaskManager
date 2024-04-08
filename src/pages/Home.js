import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {


    const[users,setUsers]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        
        loadUsers();
    },[]);

    const loadUsers = async () => {
        try {
          const result = await axios.get("https://taskmanager-backend-production-e7a8.up.railway.app/users");
          console.log(result.data);
          setUsers(result.data);  // Update state with fetched data
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };


      const deleteUser=async id=>{
        await axios.delete(`https://taskmanager-backend-production-e7a8.up.railway.app/user/${id}`);
        loadUsers();
      }
      

  return (
    <div className='container'>
      <div className='py-4'>

      <table className="table border shadow ">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Task Name</th>
      <th scope="col">Task Description</th>
      <th scope="col">Due Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.taskname}</td>
                <td>{user.taskdesc}</td>
                <td>{user.deadline}</td>

                <td>
                <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View Task
                  </Link>
                    <Link className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                    >Edit the Task</Link>
                    <button className="btn btn-danger mx-2" 
                    onClick={()=>deleteUser(user.id)}
                    >
                      
                      Completed</button>
                </td>
            </tr>
        ))
    }
    
  </tbody>
</table>
      </div>
    </div>
  )
}
