import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      form: {
        name: "",
        email: "",
        phone: "",
        school: "",
        study: "",
        studyDate: "",
        company: "",
        position: "",
        task: "",
        workEx: 0,
      },
      valid: {
        name: "",
        email: "",
        phone: "",
        school: "",
        study: "",
        studyDate: "",
        company: "",
        position: "",
        task: "",
        workEx: 0,
      },
    };
  }

  onChange = (e) => {
    let obj = {};
    for (let key in this.state.form) {
      obj[key] = e.target.id === key ? e.target.value : this.state.form[key];
    }
    this.setState({
      form: obj,
    });
    // console.log(e.target.id);
    // console.log(this.state.form);
  };

  send = (e) => {
    e.preventDefault();
    let obj = {};
    for (let key in this.state.form) {
      obj[key] = this.state.form[key];
    }
    this.setState({
      valid: obj,
    });
    // console.log(this.state.valid);
    e.target.className += "hide";
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.send}>
          <div className="general">
            <h2>General Information</h2>
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                onChange={this.onChange}
                value={this.state.form.name}
              ></input>
            </div>
            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                onChange={this.onChange}
                value={this.state.form.email}
              ></input>
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="tel"
                onChange={this.onChange}
                value={this.state.form.phone}
              ></input>
            </div>
          </div>
          <div className="study-info">
            <h2>Education Experience</h2>
            <div className="form-row">
              <label htmlFor="school">School Name:</label>
              <input
                id="school"
                type="text"
                onChange={this.onChange}
                value={this.state.form.school}
              ></input>
            </div>
            <div className="form-row">
              <label htmlFor="study">Title of study:</label>
              <input
                id="study"
                type="text"
                onChange={this.onChange}
                value={this.state.form.study}
              ></input>
            </div>
            <div className="form-row">
              <label htmlFor="studyDate">Date of study:</label>
              <input
                id="studyDate"
                type="date"
                onChange={this.onChange}
                value={this.state.form.studyDate}
              ></input>
            </div>
          </div>
          <div className="prac-ex">
            <h2>Practical Experience</h2>
            <div className="form-row">
              <label htmlFor="company">Company Name:</label>
              <input
                id="company"
                type="text"
                onChange={this.onChange}
                value={this.state.form.company}
              ></input>
            </div>
            <div className="form-row">
              <label htmlFor="position">Position:</label>
              <input
                id="position"
                type="text"
                onChange={this.onChange}
                value={this.state.form.position}
              ></input>
            </div>
            <div className="form-row">
              <label htmlFor="task">Task of job:</label>
              <textarea
                id="task"
                type="text"
                onChange={this.onChange}
                value={this.state.form.task}
              ></textarea>
            </div>
            <div className="form-row">
              <label htmlFor="workEx">Working Experience(Years):</label>
              <input
                id="workEx"
                type="number"
                min="1"
                value={this.state.form.workEx}
                onChange={this.onChange}
              ></input>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
