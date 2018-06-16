import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.div `
  text-align: center;
`;


class LeftOutput extends Component {
  render() {
    return(
      <Title>
        <h3>left output</h3>
      </Title>
    );
  }
}

export default LeftOutput;
