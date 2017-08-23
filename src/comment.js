import React, { Component } from 'react';
import './comment.css';

class Comment extends Component {

    render(){
      return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <hr/>
        <p className="comment-body">{this.props.body}</p>
        <div className="commen-footer">
          <a href="#"  className="comment-footer-delete">Delete comment</a>
        </div>

      </div>
    );
  }
}
export default Comment;
