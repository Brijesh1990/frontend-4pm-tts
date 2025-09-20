import React from 'react'
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
export default function Content() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };

  return (
    <div className='content bg-white'>
      <h1>Welcome to AMS App</h1>
      <hr className='w-25 border border-2 border-dark' />
      <h3><Link to='/add-attendance'><button type='button' className='btn btn-lg btn-primary'>Add Attendance <span className='bi bi-person'></span></button></Link>
      
      <button type='button' className='btn btn-lg btn-danger float-end'>Export in Excel <span className='bi bi-file-excel'></span></button>
      </h3>  
      <table className="table table-bordered w-100 mb-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Students Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>2024-06-10</td>
            <td>Present</td>
            <td>
              <button className="btn btn-primary btn-sm mx-1">Read</button>
              <button className="btn btn-warning btn-sm mx-1">Edit</button>
              <button className="btn btn-danger btn-sm mx-1">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}
