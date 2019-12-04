import React, { Component } from "react";
import "./kstyles.css";
class Kayttaja extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="input-field col s5">
              <input id="username" type="text" class="validate" />
              <label for="username">Username</label>
            </div>
            <div className="input-field col s5">
              <input id="password" type="text" class="validate" />
              <label for="password">Password</label>
            </div>
            <button
              className="input-field bb col s2 waves-effect waves-light"
              type="submit"
              name="action"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Kayttaja;
