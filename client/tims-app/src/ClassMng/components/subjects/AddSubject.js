import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  MenuItem
} from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";
import "./AddSubject.css";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

export const ADD_SUBJECT_POPUP_MODE = {
  INSERT: "INSERT",
  UPDATE: "UPDATE"
};

class AddSubject extends Component {
  state = {
    displayColorPicker: false,
    colorHex: "",
    name: "",
    currentSubjectList: this.props.currentSubjectList,
    colorErrorMsg: "",
    nameErrorMsg: "",
    mode: this.props.mode,
    titleToUpdate: "Update the Subject",
    titleToAdd: "Add a Subject"
  };

  componentDidMount() {
    if (this.state.mode === ADD_SUBJECT_POPUP_MODE.UPDATE) {
      this.setState({
        name: this.props.subjectToUpdate.name,
        colorHex: this.props.subjectToUpdate.color
      });
    }
  }

  handleOnClickCreate = () => {
    if (this.state.mode === ADD_SUBJECT_POPUP_MODE.UPDATE) {
      const updatedSubject = {
        id: this.props.subjectToUpdate.id,
        name: this.state.name,
        color: this.state.colorHex
      };
      this.props.onUpdate(updatedSubject);
    } else {
      this.props.onCreate({
        name: this.state.name,
        color: this.state.colorHex
      });
    }

    this.handleOnClickCancel();
  };

  handleOnClickCancel = () => {
    this.props.onClose();
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleColorChange = (color, event) => {
    const usedColorList = this.state.currentSubjectList.filter(s => {
      return s.color === color.hex;
    });
    if (usedColorList.length !== 0) {
      this.setState({
        colorErrorMsg:
          "Selected Color is already used. Please select another color!",
        displayColorPicker: false
      });
    } else {
      this.setState({
        colorHex: color.hex,
        colorErrorMsg: ""
      });
    }
  };

  handleNameChange = event => {
    const currentSubjects = this.state.currentSubjectList.filter(s => {
      return s.name === event.target.value;
    });
    if (currentSubjects.length !== 0) {
      this.setState({
        nameErrorMsg:
          "Entered Subject is already used. Please enter another Subject!"
      });
    } else {
      this.setState({
        name: event.target.value,
        nameErrorMsg: ""
      });
    }
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: this.state.colorHex
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2",
          top: "51px",
          left: "70px"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });
    return (
      <div className="add-subject-popup">
        <div className="add-subject-backdrop" />
        <div className="add-subject-form">
          <Card className="popup-card">
            <CardHeader
              title={
                this.state.mode === ADD_SUBJECT_POPUP_MODE.UPDATE
                  ? this.state.titleToUpdate
                  : this.state.titleToAdd
              }
            />
            <IconButton
              className="popup-cancel-btn"
              aria-label="cancel"
              onClick={this.handleOnClickCancel}
            >
              <Cancel />
            </IconButton>
            <CardContent>
              <div className="input-wrap">
                <TextField
                  id="outlined-subject-input"
                  label="Subject Name"
                  type="text"
                  onInput={this.handleNameChange}
                  name="subject_name"
                  margin="normal"
                  variant="outlined"
                  value={this.state.name}
                />
                {this.state.nameErrorMsg.length > 0 ? (
                  <div>
                    <span style={{ color: "red" }}>
                      {this.state.nameErrorMsg}
                    </span>
                  </div>
                ) : null}

                <div>
                  <h6>Color: </h6>
                  <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                  </div>
                  {this.state.displayColorPicker ? (
                    <div style={styles.popover}>
                      <div style={styles.cover} onClick={this.handleClose} />
                      <SketchPicker
                        color={this.state.colorHex}
                        onChange={this.handleColorChange}
                      />
                    </div>
                  ) : null}
                </div>
                {this.state.colorErrorMsg.length > 0 ? (
                  <div>
                    <span style={{ color: "red" }}>
                      {this.state.colorErrorMsg}
                    </span>
                  </div>
                ) : null}
              </div>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton
                className="popup-create-btn"
                aria-label="create"
                onClick={this.handleOnClickCreate}
                disabled={
                  this.state.name.length === 0 ||
                  this.state.colorHex.length === 0 ||
                  this.state.colorErrorMsg.length !== 0 ||
                  this.state.nameErrorMsg.length !== 0
                }
              >
                <CheckCircle />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default AddSubject;
