import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./sidebar";
import Dashboard from "./dashboard";
import Profile from "./Profile";
import logo from "../src/avatar.svg";


export default function App() {
  return (
    <Router>
      <div class="sidebar">
        <div class="sidebar-wrap">
          <ul>
            <li className="sidebar__list">
              <Link to="/profile" class="sidebar__link">
                Profile
              </Link>
            </li>

            <li class="sidebar__list">
              <i className="fas fa-wallet sidebar-icon"></i>
              <Link to="/dashboard" class="sidebar__link">
                Dashboard
              </Link>
            </li>
            <li class="sidebar__list">
              <i className="fas fa-truck sidebar-icon"></i>
              <Link to="/login" class="sidebar__link">
                Login
              </Link>
            </li>
          </ul>
        </div>
        </div>

        {/* NavBar */}
        <header>
          <div class="header__col">
            <i class="fas fa-bars" onclick="navToggle(); "></i>
            <a>
              <span class="brand-logo-1">
                Inven<span class="tory">Tory.</span>
              </span>
            </a>
          </div>

          <div class="nav-right">
            <i class="bx bx-search-alt-2"></i>

            <i class="far fa-bell"></i>

            <div class="user-wrapper">
              <img
                src={logo}
                width="40px"
                height="40px"
                className="avatar"
                alt="avatar"
              />

              <div class="nav__dropdown">
                <div class="admin-details">
                  <span class="admin-name">John Doe</span>
                  <span class="admin-pos">Admin</span>
                </div>
                <div class="dropwdown-list">
                  <i class="far fa-user-circle nav-icon"></i>
                  <Link to="./login" class="drop-link">
                    Update Profile
                  </Link>
                </div>
                <div class="dropwdown-list">
                  <i class="far fa-user-circle nav-icon"></i>
                  <a href="#" class="drop-link">
                    View Profile
                  </a>
                </div>
                <div class="dropwdown-list">
                  <i class="fas fa-key nav-icon"></i>
                  <a href="#" class="drop-link">
                    {" "}
                  </a>
                </div>
                <div class="dropwdown-list">
                  <i class="fas fa-power-off nav-icon"></i>
                  <a href="#" class="drop-link">
                    {" "}
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      
      <Switch>
        <Route path="/profile">
          <ProfileSection />
        </Route>
        <Route path="/login">
          <LoginSection />
        </Route>

        <Route path="/dashboard">
          <DashboardSection />
        </Route>
      </Switch>
    </Router>
  );
}

function ProfileSection() {
  return Profile();
}

function DashboardSection() {
  return Dashboard();
}

function LoginSection() {
  return Login();
}
