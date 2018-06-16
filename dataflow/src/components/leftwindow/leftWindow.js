import React from 'react';
import controlPanel from './controlPanel';
import outputWindow from './outputWindow';


class leftWindow extends React.Component {
  render(){
    return(
      <div>
        <controlPanel />
        <outputWindow />
      </div>
    );
  }
}

export default leftWindow;
