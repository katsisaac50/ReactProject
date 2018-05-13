import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import logo3 from './jfaulstick1.jpg';
import './App.css';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`
class Header extends Component {
  render() {
    return (
      <HeaderDiv className="App-header">
        <Link to="/">
        <ProfileImage src={logo3} alt='Isaac's photo/>
        </Link>  
        <ProfileTitle className="App-title">KATONGOLE ISAAC</ProfileTitle>
        
        <div className="topnav">
          <Link className="active" to='/'>Home</Link>
          <Link to='/content'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <hr/>

      </HeaderDiv>
    );
  }
}

export default Header;