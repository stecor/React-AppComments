import React, { Component } from 'react';
import './commentBox.css';
import Comment from './comment';
import CommentForm from './commentForm';

class CommentBox extends Component {

  constructor(){
    super();
    this.state={showComments:false,
                comments:[
                  { id: 1, author: 'Morgan McCircuit', body: 'Great picture!'},
                  { id: 2, author: 'Bending Bender', body: 'Excellent stuff'}
                ]
              };
  }

  render(){
      let buttonText = 'Show Comments';

      const comments = this._getComments();
      let commentNodes;
      if(this.state.showComments){
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>
      }

      return(
        <div className="comment-box">
          <CommentForm addComment={this._addComment.bind(this)}/>
          <h3>Comments</h3>
          <button  onClick={this._handleClick.bind(this)}>{buttonText}</button>
          <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>
      );
  }

  _deleteComment(){

  }

  _addComment(author,body){
    const comment = { id: this.state.comments.length +1, author, body};
    this.setState({comments: this.state.comments.concat([comment])});
  }

  _handleClick(){
    this.setState({showComments: !this.state.showComments});
  }

  _getComments(){
    return this.state.comments.map((comment) => {
      return (<Comment
                  author={comment.author}
                  body={comment.body}
                  key={comment.id}/>
      );
    });
  }

  _getCommentsTitle(commentCount){
    if (commentCount === 0){
      return 'No comments yet';
    }else if (commentCount === 1){
      return '1 comment';
    }else {
      return `${commentCount} comments`;
    }
  }
}
export default CommentBox;
