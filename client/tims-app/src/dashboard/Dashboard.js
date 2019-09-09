import React, { Component } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import HomePage from "./HomePage";
import ClassDashboard from "../ClassMng/containers/ClassDashboardContainer";
import ClassesPage from "../ClassMng/components/tutionClass/ClassesPage";
import ParentDashboard from "../ParentMng/components/parents/ParentDashboard";
import { Route } from "react-router-dom";
import { ROUTE_PATHS, ROUTE_DASHBOARD_TITLES } from "../Constants";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { dashboardTitleUpdated } from "./actions/UiActions";

const mapDispatchToProps = (dispatch, ownprops) => ({
  updateDashboardTitle: newTitle => dispatch(dashboardTitleUpdated(newTitle))
});

class Dashboard extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      // update header title
      console.log("updating title");
      const newTitle = ROUTE_DASHBOARD_TITLES.filter(
        r => r.path === nextProps.location.pathname
      )[0].title;

      console.log("newtitle =>" + newTitle);
      this.props.updateDashboardTitle(newTitle);
    }
  }

  render() {
    return (
      <div style={sideBarStyle.root}>
        <div style={sideBarStyle.header}>
          <Header />
        </div>
        <div style={sideBarStyle.main}>
          <div style={sideBarStyle.sideBar}>
            <SideBar />
          </div>
          <div style={sideBarStyle.content}>
            <Route path={ROUTE_PATHS.HOMEPAGE} exact component={HomePage} />
            <Route
              path={ROUTE_PATHS.CLASS_DASHBOARD}
              component={ClassDashboard}
            />
            <Route path={ROUTE_PATHS.TUTION_CLASS} component={ClassesPage} />
            {/* <Route path={ROUTE_PATHS.SUBJECTS} component={SubjectsPage} /> */}
            <Route path={ROUTE_PATHS.PARENTS} component={ParentDashboard} />
            {/* <Route path="/" component={HomePage} /> */}
          </div>
        </div>
      </div>
    );
  }
}
const sideBarStyle = {
  root: {
    width: "100%",
    height: "100vh"
  },
  header: {
    height: "50px",
    backgroundColor: "#1976d2",
    boxShadow: "0px 1px 6px 0px rgba(32,33,36,0.28)"
  },
  main: {
    height: "calc( 100% - 50px )",
    display: "flex"
  },
  sideBar: {
    width: "100px",
    height: "100%",
    borderRight: "1px solid #aaa"
  },
  content: {
    height: "100%",
    width: "100%"
  }
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Dashboard)
);
