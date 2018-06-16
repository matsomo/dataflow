import React from 'react';
import styled from 'styled-components';

class controlPanel extends React.Component {
  const Title = styled.div`
     font-size: 16px;
     color: black;
  `;


  render(){
    return(
      <div>
        <Title>Left Window</Title>
      </div>
    );
  }
}

export default controlPanel;
