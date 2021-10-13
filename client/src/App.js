import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState(""); 
  const [salary, setSalary] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () =>{
      Axios.post('http://localhost:5000/create', {
        name: name,
        age: age,
        country: country,
        position: position,
        salary: salary
      }).then(() => console.log("success"));
  }

  const getEmployees = () =>{
    Axios.get('http://localhost:5000/employees').then((response) => setEmployeeList(response.data));
  }
  
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={event => setName(event.target.value)}/>&nbsp;
        <label>Age:</label>
        <input type="number" onChange={event => setAge(event.target.value)}/>&nbsp;
        <label>Country:</label>
        <input type="text" onChange={event => setCountry(event.target.value)}/>&nbsp;
        <label>Position:</label>
        <input type="text" onChange={event => setPosition(event.target.value)}/>&nbsp;    
        <label>Salary (year):</label>
        <input type="number" onChange={event => setSalary(event.target.value)}/>
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <hr/>
      <div className="listEmployees">
        <button onClick={getEmployees}>Show all employees</button>
        {employeeList.map((val,key)=>{
          return (
            <div className="employee">
            <h3>Name: {val.name}</h3>
            <h3>Age: {val.age}</h3>
            <h3>Country: {val.country}</h3>
            <h3>Position: {val.position}</h3>
            <h3>Salary: {val.salary}</h3>
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default App;
