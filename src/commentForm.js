import React, { Component } from 'react';
import './commentForm.css';

class CommentForm extends Component{

  render(){
    return(
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label className="lblTitle">JOIN THE DISCUSSION</label><br/>
        <div className="comment-form-fields"><br/>
        <label className="lblComment">NEW COMMENT</label><br/><br/>
          <input className="inputName" placeholder="Name"  ref={(input)=>this._author = input}/><br/>
          <textarea className="inpuComment" placeholder="Join the discussion..." ref={(textarea)=>this._body = textarea}></textarea><br/>
            <button type="submit" className="submitbtn" >Post comment</button>
        </div>
      </form>
    );
  }

  _handleSubmit(event){
    event.preventDefault();
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
}
export default CommentForm;
