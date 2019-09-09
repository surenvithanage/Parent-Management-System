import React, { Component } from "react";
import { Card, CardContent, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import "./AddSubject.css";

class Subject extends Component {
  state = {};
  render() {
    return (
      <Card className="subject-cards">
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "10px"
              }}
            >
              <div
                className="round"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: this.props.subject.color
                }}
              />

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "20px"
                }}
              >
                <span>{this.props.subject.name}</span>
              </div>
            </div>

            <div>
              <IconButton
                aria-label="eidt"
                onClick={() => this.props.updateSubject(this.props.subject)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => this.props.deleteSubject(this.props.subject.id)}
              >
                <Delete />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Subject;
