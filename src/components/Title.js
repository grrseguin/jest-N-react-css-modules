import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Title.css';


var Title = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className={styles.title}>
          Hello, world! I am a title.
        </h1>
        <h2 styleName='title'>
          Hello, world! I am a title.
        </h2>
      </div>
    );
  }
});

export default CSSModules(Title, styles);
