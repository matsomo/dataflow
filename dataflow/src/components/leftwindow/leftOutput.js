import React, {Component} from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/postActions';


const Output = styled.div `
  background-color: white;
  border-radius: 5px;
  margin: auto;
  margin-top: 60px;
  height: 600px;
  width: 80%;
  padding: 10px;
`;


class LeftOutput extends Component {

componentWillMount() {
  this.props.fetchData();
}

render() {
  const dataItems = this.props.data.map(d => (
    <li key={d.id}>{d.first_name}</li>
  ));
    return(
      <Output>
        <ul>
          { dataItems }
        </ul>
      </Output>
    );
  }
}

LeftOutput.propTypes = {
  fetchData: propTypes.func.isRequired,
  data: propTypes.array.isRequired
}

const mapsStateToProps = state => ({
  data: state.lefts.items
});

export default connect(mapsStateToProps, { fetchData })(LeftOutput);
