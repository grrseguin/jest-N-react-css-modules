import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Title.css';


var Title = React.createClass({
  render: function() {
    return (
      <h1 styleName='title'>
        Hello, world! I am a title.
      </h1>
    );
  }
});

export default CSSModules(Title, styles);
