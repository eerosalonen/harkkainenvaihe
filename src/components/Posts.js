import React, { Component } from "react";
class Posts extends Component {
  render() {
    console.log(this.props.posts);
    return this.props.posts.map(comment => (
      <div className="row">
        <p className="col s9">{"kommentti:" + comment.title}</p>
        <p className="col s1">{comment.postid}</p>
        <p className="col s2">asdasd</p>
      </div>
    ));
  }
}
export default Posts;
