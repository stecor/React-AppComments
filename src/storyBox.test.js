import React from 'react';
import ReactDOM from 'react-dom';
import StoryBox from './storyBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoryBox />, div);
});
