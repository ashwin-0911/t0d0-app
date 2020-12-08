/* eslint-disable react/jsx-no-target-blank */
//import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import ToDoList from "./components/todo.component";
import EditToDo from "./components/edit.component";
import CreateToDo from "./components/create.component";

import logo from "./ToDo.png"

function App() {
  return (
    <Router>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light .bg-dark">
          <a className="navbar-brand" href="https://www.google.com" target="_blank">
            <img src={logo} width="100" height="100" alt="https://www.google.com"></img>
          </a>  
          <Link to="/" className="navbar-brand">My ToDos</Link>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto ">
                <li className="navbar-item">
                  <Link to="/" className="nav-link " >Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
        </nav>
        
        <Route path="/" exact component={ToDoList} />
        <Route path="/edit/:id" exact component={EditToDo} />
        <Route path="/create" exact component={CreateToDo} />
      </div>
    
    </Router>
         
  );
}

export default App;
