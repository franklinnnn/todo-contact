import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  ViewList,
  ViewListOutlined,
  ContactPage,
  ContactPageOutlined,
  CalendarMonth,
  CalendarMonthOutlined,
  Info,
  InfoOutlined,
} from "@mui/icons-material";

const Header = () => {
  return (
    <nav>
      <div className="header-title">todo/contact</div>
      <ul>
        <li className="nav-link">
          <NavLink to="/home" activeClassName="active">
            <HomeOutlined />
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/todos" activeClassName="active">
            <ViewListOutlined />
            ToDos
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contacts" activeClassName="active">
            <ContactPageOutlined />
            Contacts
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/appointments" activeClassName="active">
            <CalendarMonthOutlined />
            Appointments
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about" activeClassName="active">
            <InfoOutlined />
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
