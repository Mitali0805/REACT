import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  './Employee.css'

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],   
      name: "",
      job:"",
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangejob = this.handleChangejob.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  delete(e) {
    this.state.items.splice(this.state.items.indexOf(e), 1);
    this.setState({ items: this.state.items });
  }
  
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  handleChangejob(e) {
    this.setState({ job: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length || !this.state.job.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      job:this.state.job,
    };
    this.state.items.push(newItem);
    this.setState({ items: this.state.items });
  }

  render() {
    return (
      <div>

        <small>Add an employee with a name and a job to the table.</small>
            <table className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {this.state.items.map((item, index) => (
                <tr key={index}>
                    <td> {item.name} </td>
                    
                    <td> {item.job} </td>
                
                    <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.delete(item)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
          <br/>
      
       <div className="form-group">
       <h4>Add new Employee</h4>
        <form onSubmit={this.handleSubmit} >
            
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            placeholder="Enter Name"
            onChange={this.handleChange}
            className="form-control" />
            <br/>

            <label>Job</label>
          <input
            type="text"
            value={this.state.job}
            placeholder="Enter Job"
            onChange={this.handleChangejob}
            className="form-control"/><br/>
            
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>  
    );
  }
  
}

export default Employee;
