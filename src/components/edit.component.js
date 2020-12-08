import React, {Component} from 'react';
import axios from 'axios';


export default class EditToDo extends Component{

    constructor(props) {
        super(props);

        this.onChangeTodoTask = this.onChangeTodoTask.bind(this);
        this.onChangeTodoDetails = this.onChangeTodoDetails.bind(this);
        this.onChangeTodoBy = this.onChangeTodoBy.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_task: '',
            todo_details: '',
            todo_by: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_task: response.data.todo_task,
                    todo_details: response.data.todo_details,
                    todo_by: response.data.todo_by,
                    todo_completed: response.data.todo_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_task: this.state.todo_task,
            todo_details: this.state.todo_details,
            todo_by: this.state.todo_by,
            todo_completed: this.state.todo_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <br></br>
                <h3 className="h1">Update Task</h3>
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div>
                        <input type="submit" value="Update Task" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}