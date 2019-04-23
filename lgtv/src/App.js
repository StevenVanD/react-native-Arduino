import React from 'react';
import ReactTV from 'react-tv';

class ReactTVApp extends React.Component {
  render() {
    return <div>Arduino</div>;
  }
}

ReactTV.render(<ReactTVApp />, document.querySelector('#root'));
