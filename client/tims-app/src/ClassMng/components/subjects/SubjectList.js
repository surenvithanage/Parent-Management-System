import React, { Component } from "react";
import Subject from "./Subject";
import AddSubjectForm from "../../containers/AddSubjectForm";
import { ADD_SUBJECT_POPUP_MODE } from "./AddSubject";

export class SubjectList extends Component {
  state = {
    showUpdatePopUp: false,
    subjectToUpdate: null
  };

  toggleUpdatePopUp = () => {
    this.setState({
      showUpdatePopUp: !this.state.showUpdatePopUp
    });
  };

  handleUpdate = subject => {
    this.toggleUpdatePopUp();
    this.setState({
      subjectToUpdate: subject
    });
  };

  render() {
    return (
      <div style={{ display: "flex", padding: "20px", flexWrap: "wrap" }}>
        {this.props.subjects.map((s, i, a) => (
          <Subject
            subject={s}
            key={i}
            updateSubject={this.handleUpdate}
            deleteSubject={this.props.onDeleteSubject}
          />
        ))}
        {this.state.showUpdatePopUp ? (
          <AddSubjectForm
            mode={ADD_SUBJECT_POPUP_MODE.UPDATE}
            onCancelPopup={this.toggleUpdatePopUp}
            subjectToUpdate={this.state.subjectToUpdate}
          />
        ) : null}
      </div>
    );
  }
}
