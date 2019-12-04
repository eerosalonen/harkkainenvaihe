import React, { Component } from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts";
import Kayttaja from "./components/Kayttaja";
import "./styles.css";

class App extends Component {
  state = {
    posts: [
      {
        postid: "1",
        title: "juju"
      },
      {
        postid: "1",
        title: "juju"
      },
      {
        postid: "1",
        title: "juju"
      },
      {
        postid: "1",
        title: "juju"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <div className="body s10">
          <div className="row">
            <h1 className="col s3 offset-s5">H</h1>
          </div>
          <div className="row">
            <div className="col s12">Tämä ois posti</div>
            <Kayttaja />
          </div>
          <div className="row">
            <div className="col s2">1</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
          </div>
          <div className="posts">
            <Posts posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
