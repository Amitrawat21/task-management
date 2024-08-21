import React, { useEffect, useState } from "react";
import './AdminAssignTaskComponen.css'
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from "react-redux";


const AdminAssignTaskComponent = () => {
    const { user } = useSelector((state) => state.auth);
    const[data , setData] = useState([])

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

  const getData = async () => {
    const response = await axios.get(`https://task-management-3-8mok.onrender.com/user/Getadminassigntask/${user._id}`
    );

    setData(response.data.adminAssignedTasks)
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="AdminAssignTaskComponent">
        <h2>assign Task</h2>
        <div className="listproduct-format-mainkk">
        <p>no</p>
        <p>task</p>
        <p>assignedAt</p>
      </div>
      <div className="listproduct-allproductsk">
        <hr />

        {data[0]?.tasks  &&
          data[0]?.tasks .map((ele , index) => {
            return (
              <>
                <div key={ele._id} className="listproduct-format-mainkk listproduct-formatk">
                  <p>{index+1}</p>
                  <p>{ele.task}</p>
                  <p>{formatDate(ele.date)}</p>
                </div>
                <hr />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AdminAssignTaskComponent;
