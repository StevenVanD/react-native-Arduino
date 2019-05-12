import React from 'react';
import ReactTV from 'react-tv';

class ReactTVApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Hallooooooo</h1>
        Arduino
    </div>);
  }
}

ReactTV.render(<ReactTVApp />, document.querySelector('#root'));
