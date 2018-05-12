import React, { Component } from 'react';
import styled from 'styled-components';

import SimpleHeader from './SimpleHeader.js'
import Footer from './Footer.js'

export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
}

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

export const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
`


const ContainerDiv = styled.div`
  margin: 1% 10% 3% 1%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`

class App extends Component {
  render() {
    return (
      <AppDiv>
        <SimpleHeader />
        <ContainerDiv>
          {this.props.children}
        </ContainerDiv>
        <Footer />
      </AppDiv>
    );
  }
}

export default App;
