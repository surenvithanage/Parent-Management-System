import React, { Component } from "react";
import { Card, CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "../ClassMng.css";
import AddSubjectForm from "../containers/AddSubjectForm";
import AddTutionClassForm from "../containers/AddTutionClassForm";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../Constants";
import { ADD_SUBJECT_POPUP_MODE } from "./subjects/AddSubject";

class ClassDashboard extends Component {
  state = {
    showAddSubjectForm: false,
    showAddTutionClassForm: false,
    subjectsCount: this.props.subjectsCount
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubjects();
    this.props.fetchGrades();
    this.props.fetchTutionClassTypes();
    this.props.fetchTeachers();
  }

  componentDidUpdate(prevProp) {
    if (this.props.subjectsCount !== prevProp.subjectsCount) {
      this.setState({
        subjectsCount: this.props.subjectsCount
      });
    }
  }

  toggleAddSubjectForm = () => {
    this.setState({
      showAddSubjectForm: !this.state.showAddSubjectForm
    });
  };

  toggleAddTutionClassForm = () => {
    this.setState({
      showAddTutionClassForm: !this.state.showAddTutionClassForm
    });
  };

  render() {
    return (
      <div className="shortcut-wrap">
        <Card className="class-dashboard-shortcut">
          <Link
            to={ROUTE_PATHS.SUBJECTS}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardHeader
              avatar={
                <Avatar>
                  <img className="w-100" src="/image/subjects.svg" />
                </Avatar>
              }
              title="Subjects"
              subheader={this.state.subjectsCount}
            />
          </Link>
        </Card>

        <Card className="class-dashboard-shortcut">
          <Link
            to={ROUTE_PATHS.TUTION_CLASS}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardHeader
              avatar={
                <Avatar>
                  <img className="h-100" src="/image/clzes.svg" />
                </Avatar>
              }
              title="Classes"
              subheader="10"
            />
          </Link>
        </Card>

        <Card
          onClick={this.toggleAddTutionClassForm}
          className="class-dashboard-shortcut"
        >
          <CardHeader
            avatar={
              <Avatar>
                <img className="w-100 h-100" src="/image/class.svg" />
              </Avatar>
            }
            title="Add Class"
          />
        </Card>

        {this.state.showAddTutionClassForm ? (
          <AddTutionClassForm onCancelPopup={this.toggleAddTutionClassForm} />
        ) : (
          ""
        )}

        <Card
          onClick={this.toggleAddSubjectForm}
          className="class-dashboard-shortcut"
        >
          <CardHeader
            avatar={
              <Avatar>
                <img className="w-100 h-100" src="/image/subject.svg" />
              </Avatar>
            }
            title="Add Subject"
          />
        </Card>

        {this.state.showAddSubjectForm ? (
          <AddSubjectForm
            mode={ADD_SUBJECT_POPUP_MODE.INSERT}
            onCancelPopup={this.toggleAddSubjectForm}
          />
        ) : null}
      </div>
    );
  }
}

export default ClassDashboard;
