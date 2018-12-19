import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Routes from './Routes';
import {LinkContainer} from 'react-router-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Chinna Link</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
              <Nav pullRight>
                <LinkContainer to="/addlink">
                  <NavItem>Add Link</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
