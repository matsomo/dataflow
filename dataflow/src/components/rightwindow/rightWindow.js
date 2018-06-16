import React from 'react';
import controlPanel from './controlPanel';
import outputWindow from './rightWindow';

class rightWindow extends React.Component {
  redner() {
    return(
      <div>
        <controlPanel />
        <outputWindow />
      </div>
    );
  }
}

export default rightWindow;
