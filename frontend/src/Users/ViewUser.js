import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    taskname: "",
    taskdesc: "",
    deadline: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`https://taskmanager-backend-production-e7a8.up.railway.app/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Task Details</h2>

          <div className="card">
            <div className="card-header">
              {/* Details of user id : {user.id} */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Task Name: </b> 
                  {user.taskname}
                </li>
                <li className="list-group-item">
                  <b>Task Description:</b>
                  {user.taskdesc}
                </li>
                <li className="list-group-item">
                  <b>Task Deadline:</b>
                  {user.deadline}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}