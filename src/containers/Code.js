import React, { Component } from "react";
import styled from "styled-components";

import { ColorScheme } from "../theme/styleConstants";
export const PortButton = styled.a`
 /* padding: 10px 15px;*/
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  /*margin: 0 5px;*/
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

class Code extends Component {
    render() {
      return (
        <div>
            <h2 className='littleHeading'>Skills:</h2>
              <div className='wrapper'>
               <div className='grid'>
                <h5>Front-end:</h5>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>React</li>
                  <li>JavaScript (ES6)</li>
                  <li>jQuery</li>
                  <li>AJAX</li>
                </ul>
              </div>
              <div className='grid'>
                <h5>Back-end:</h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                </ul>
              </div>
          <hr />
          </div>
        </div>
      );
    }
  }
 

export default Code;
