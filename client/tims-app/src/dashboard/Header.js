import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import "./header.css";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../Constants";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { connect } from "react-redux";

const HeaderLogo = () => (
  <Link to={ROUTE_PATHS.HOMEPAGE}>
    <div style={{ display: "flex" }}>
      <div className="header-logo">
        <img src="https://www.powerslaw.com/wp-content/uploads/2017/10/U.S.-Dept-Ed.jpg" />
      </div>
    </div>
  </Link>
);

class HeaderProfile extends Component {
  state = {
    isMenuOpened: false
  };

  handleClick = () => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    });
  };

  render() {
    return (
      <div className="header-profile">
        <div className="home-icon-wrap">
          <Link to={ROUTE_PATHS.HOMEPAGE}>
            <HomeRoundedIcon style={{ color: "#f8f9fa" }} />
          </Link>
        </div>
        <div onClick={this.handleClick} className="user-wrap">
          <div className="user-image">
            <img src={this.props.image} />
          </div>
          <span style={{ color: "#ffffff" }}>{this.props.name}</span>
          <span>
            <img
              src="/image/down.png"
              style={{ width: "15px", margin: "5px 10px" }}
            />
          </span>
        </div>

        <div
          className={
            this.state.isMenuOpened
              ? "shadow user-menu menu-opened "
              : "shadow user-menu "
          }
        >
          <MenuList>
            <MenuItem className="menu-item">Profile</MenuItem>
            <MenuItem className="menu-item">Setting</MenuItem>
            <MenuItem className="menu-item">Logout</MenuItem>
          </MenuList>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  users = [
    {
      image:
        "https://banner2.kisspng.com/20180630/ltq/kisspng-computer-icons-user-avatar-clip-art-skincare-cartoon-5b371025a6d8a7.5354815915303352696834.jpg",
      name: "Yalu"
    },
    {
      image:
        "https://cdn.imgbin.com/15/3/18/imgbin-computer-icons-woman-avatar-avatar-girl-TBWeJMyXNwtNQA661FQ0rZSv2.jpg",
      name: "Malu"
    }
  ];

  render() {
    return (
      <div className="header-wrap">
        <div className="logo-wrap">
          <HeaderLogo />
          <h5>{this.props.title}</h5>
        </div>
        <HeaderProfile image={this.users[0].image} name={this.users[0].name} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.ui.dashboardHeaderTitle
});

export default connect(
  mapStateToProps,
  null
)(Header);
