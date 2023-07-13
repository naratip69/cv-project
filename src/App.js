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
    this.setState((valid[e.target.id] = e.target.value));
  };

  send = (e) => {
    e.preventDefault();
    for (key in this.valid) {
      this.setState((valid[key] = this.state.form[key]));
    }
  };

  render() {
    return (
      <div className="App">
        <form>
          <div class="general">
            <h2>General Information</h2>
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input id="name" type="text"></input>
            </div>
            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email"></input>
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone:</label>
              <input id="phone" type="tel"></input>
            </div>
          </div>
          <div class="study-info">
            <h2>Education Experience</h2>
            <div className="form-row">
              <label htmlFor="school">School Name:</label>
              <input id="school" type="text"></input>
            </div>
            <div className="form-row">
              <label htmlFor="study">Title of study:</label>
              <input id="study" type="text"></input>
            </div>
            <div className="form-row">
              <label htmlFor="studyDate">Date of study:</label>
              <input id="studyDate" type="date"></input>
            </div>
          </div>
          <div class="prac-ex">
            <h2>Practical Experience</h2>
            <div className="form-row">
              <label htmlFor="company">Company Name:</label>
              <input id="company" type="text"></input>
            </div>
            <div className="form-row">
              <label htmlFor="position">Position:</label>
              <input id="position" type="text"></input>
            </div>
            <div className="form-row">
              <label htmlFor="task">Task of job:</label>
              <textarea id="task" type="text"></textarea>
            </div>
            <div className="form-row">
              <label htmlFor="workEx">Working Experience(Years):</label>
              <input id="workEx" type="number" min="1" value={1}></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
