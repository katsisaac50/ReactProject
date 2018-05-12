import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";

const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
`;

class Contact extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Feel free to leave me a feedback!</CenteredHeader>
        <div class="container">
          <form
            action="https://formspree.io/katsisaac50@gmail.com"
            method="POST"
            id="contactform"
          >
            <div class="row">
              <div class="col-25">
                <label for="fname">First Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your first name.."
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Last Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Email:</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="lname"
                  name="_replyto"
                  placeholder="Your email.."
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="subject">comment</label>
              </div>
              <div class="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                  required
                />
              </div>
            </div>
            <div class="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <EmailMe>
          Or just email directly at{" "}
          <a
            href="mailto:katsisaac50@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            katsisaac50@gmail.com
          </a>
        </EmailMe>
      </div>
    );
  }
}


export default Contact;