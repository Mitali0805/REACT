import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function EmployeeList() {

    const employees = [
        {name:"Charlie",job:"Janitor"},
        {name:"Mac",job:"Bouncer"},
        {name:"Dee",job:"Aspiring actress"},
        {name:"Dennis",job:"Bartender"}

    ];
    return (
        <div className="container"> 
           <table className="table">
               <thead>
                <tr>
                   <th>Name</th>
                   <th>Job</th>
                </tr>
                </thead>
               <tbody className="text-center">
                {employees.map((employee,index) =>(

                    <tr key={index}>
                        <td>{employee.name}</td>
                        <td>{employee.job}</td>
                    </tr>
                ))}
               </tbody>
           </table> 
        </div>
    )
}

export default EmployeeList
