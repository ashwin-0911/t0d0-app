import React, {Component} from 'react';
import axios from 'axios';


export default class CreateToDo extends Component{
    constructor(props) {
        super(props);

        this.onChangeTodoTask = this.onChangeTodoTask.bind(this);
        this.onChangeTodoDetails = this.onChangeTodoDetails.bind(this);
        this.onChangeTodoBy = this.onChangeTodoBy.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_task: '',
            todo_details: '',
            todo_by: '',
            todo_completed: false
        }
    }
    
    onChangeTodoTask(e) {
        this.setState({
            todo_task: e.target.value
        });
    }

    onChangeTodoDetails(e) {
        this.setState({
            todo_details: e.target.value
        });
    }

    onChangeTodoBy(e) {
        this.setState({
            todo_by: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Task: ${this.state.todo_task}`);
        console.log(`Todo Details: ${this.state.todo_details}`);
        console.log(`Todo By: ${this.state.todo_by}`);
        
        const newTodo = {
            todo_task: this.state.todo_task,
            todo_details: this.state.todo_details,
            todo_by: this.state.todo_by,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_task: '',
            todo_details: '',
            todo_by: '',
            todo_completed: false
        })
    }

    render() {
        return(
            <div>
                <br></br>
                <h3 className="h1">New Task</h3>
                <br></br>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group"> 
                        <label>Task: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_task}
                                onChange={this.onChangeTodoTask}
                                />
                    </div>
                    <div className="form-group">
                        <label>Details: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.todo_details}
                                onChange={this.onChangeTodoDetails}
                                />
                    </div>
                    <div className="form-group">
                    <label>By: </label>
                        <input 
                                type="date" 
                                className="form-control"
                                value={this.state.todo_by}
                                onChange={this.onChangeTodoBy}
                                />
                        
                    </div>
                    <div >
                        <input type="submit" value="Add Task" className="btn btn-primary" />
                    </div>
                </form>
              </div>  
        )
    }
}