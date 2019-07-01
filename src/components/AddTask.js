import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 3) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("Too short!");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          onChange={this.handleText}
          type="text"
          placeholder="add task.."
          value={this.state.text}
        />
        <input
          onChange={this.handleCheckbox}
          type="checkbox"
          checked={this.state.checked}
          id="important"
        />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="date">Expected finish date</label>
        <input
          onChange={this.handleDate}
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
        />
        <br />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;
