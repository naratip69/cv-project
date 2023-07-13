import { Component } from "react";
import React from "react";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  btnHandle = (e) => {
    let Form = document.querySelector(".hide");
    Form.classList.remove("hide");
    let display = e.target.parentElement;
    display.classList.add("hide");
  };

  render() {
    const { form } = this.props;
    // console.log(this.props);
    return (
      <div id="show" className="hide">
        <div className="general">
          <div className="row">
            <h3>Name</h3>
            <div>{form.name}</div>
          </div>
          <div className="row">
            <h3>Email</h3>
            <div>{form.email}</div>
          </div>
          <div className="row">
            <h3>Phone</h3>
            <div>{form.phone}</div>
          </div>
        </div>
        <div className="study-info">
          <div className="row">
            <h3>School Name</h3>
            <div>{form.school}</div>
          </div>
          <div className="row">
            <h3>Title of study</h3>
            <div>{form.study}</div>
          </div>
          <div className="row">
            <h3>Date of study</h3>
            <div>{form.studyDate}</div>
          </div>
        </div>
        <div className="prac-ex">
          <div className="row">
            <h3>Company name</h3>
            <div>{form.company}</div>
          </div>
          <div className="row">
            <h3>Position</h3>
            <div>{form.position}</div>
          </div>
          <div className="row">
            <h3>Task of job</h3>
            <div>{form.task}</div>
          </div>
          <div className="row">
            <h3>Working experience</h3>
            <div>{form.workEx}</div>
          </div>
        </div>
        <button type="button" onClick={this.btnHandle}>
          Edit
        </button>
      </div>
    );
  }
}
