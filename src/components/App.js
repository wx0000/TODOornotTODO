/*
pliki:
AppTask.js
AddTask.js
TaskList.js
Task.js
AddTask.css
*/

import AddTask from "./AddTask";
import React, { Component } from "react";
import "./App.css";
import TaskList from "./TaskList";

class App extends Component {
  counter = 4;

  state = {
    tasks: [
      {
        id: 0,
        text: "Vacation",
        date: "2019-10-06",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Finish js course",
        date: "2019-06-01",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Tool concert",
        date: "2019-06-11",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Gym payment",
        date: "2019-09-01",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO or Not TODO</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
