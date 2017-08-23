import React, { Component } from 'react';
import './storyBox.css';
import CommentBox from './commentBox';

class StoryBox extends Component {
  render() {
      const now = new Date();
      const topicsList = ['HTML','JavaScript','React'];
      const itemTopic = topicsList.map((topic) => <li key={topic.toString()}>{topic}</li>);
    return (
        <div className="lead">
          <h1>Stories</h1>
          <p className="lead">
            Current time: {now.toTimeString()}
          </p>
            <ul>
            {itemTopic}
            </ul>

          <CommentBox />
        </div>
    );
  }
}

export default StoryBox;
