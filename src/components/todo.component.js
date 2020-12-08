import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_task}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_details}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_by}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class ToDoList extends Component{

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return(
            <div>
                <br></br>
                <h3 className="h1">Todos List</h3>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Details</th>
                            <th>By</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}