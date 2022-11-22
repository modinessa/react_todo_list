import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
 
class App extends Component {
  state = {
    items:[],
    id:uuidv4(),
    title:'',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title: this.state.title
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items:updatedItems,
      title:'',
      id:uuidv4(),
      editItem:false
    });  
  }

  clearList = () => {
    this.setState({
      items:[],
      title:''
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              todo input
            </h3>
          <TodoInput
            item={this.state.title}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
          />
          </div>
        </div>
      </div>
      );
    }
  }

export default App;
