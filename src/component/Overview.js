import { Component } from "react";
import React from "react";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { form } = this.props;
    // console.log(this.props);
    return (
      <>
        <div className="general">
          <div class="row">
            <h3>Name</h3>
            <div>{form.name}</div>
          </div>
          <div class="row">
            <h3>Email</h3>
            <div>{form.email}</div>
          </div>
          <div class="row">
            <h3>Phone</h3>
            <div>{form.phone}</div>
          </div>
        </div>
        <div className="study-info">
          <div class="row">
            <h3>School Name</h3>
            <div>{form.school}</div>
          </div>
          <div class="row">
            <h3>Title of study</h3>
            <div>{form.study}</div>
          </div>
          <div class="row">
            <h3>Date of study</h3>
            <div>{form.studyDate}</div>
          </div>
        </div>
        <div className="prac-ex">
          <div class="row">
            <h3>Company name</h3>
            <div>{form.company}</div>
          </div>
          <div class="row">
            <h3>Position</h3>
            <div>{form.position}</div>
          </div>
          <div class="row">
            <h3>Task of job</h3>
            <div>{form.task}</div>
          </div>
          <div class="row">
            <h3>Working experience</h3>
            <div>{form.workEx}</div>
          </div>
        </div>
      </>
    );
  }
}
