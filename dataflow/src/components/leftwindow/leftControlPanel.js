import React, {Component} from 'react';
import styled from 'styled-components';

const MainPanel = styled.div`
  text-align: center;
`;

const SearchField = styled.input`
  height: 35px;
  width: 320px;
  border: 0;
  outline: 0;
  padding-left: 35px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  :focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  height: 38px;
  width: 80px;
  margin: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #3a3e4a;
  color: #949aa9;
  font-weight: light;
  font-size: large;
  border: 1px;
  border-color: black;
  :focus {
    outline: 0;
  }
  :active {
    filter:brightness(120%);
    transform: scale(0.9);
  }
`;

const SearchBar = styled.div`
  border-radius: 15px;
  width: 400px;
  height: 35px;
  min-width: 400px;
  margin: auto;
  padding: 0;
  overflow: hidden;
  display: inline;
`;

const ButtonPanel = styled.div`
  display: flex;
  text-align: center;
  margin: auto;
  margin-top: 40px;
  justify-content: space-between;
  width: 340px;

  .leftPanelOption1Btn, .leftPanelOption2Btn, .leftPanelOption3Btn  {
    justify-content: center;
    background-color: #3987ec;
    border: 1px;
    border-color: black;
    height: 35px;
    width: 100px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    :focus {
      outline: 0;
    }
  }

  .leftPanelOption1Btn:hover {
    background-color: #2664b7;
  }
  .leftPanelOption2Btn {
    background-color: #48a346;
  }
  .leftPanelOption2Btn:hover {
    background-color: #2f7e27;
  }
  .leftPanelOption3Btn {
    background-color: #c84236;
  }
  .leftPanelOption3Btn:hover {
    background-color: #a81e14;
  }
`;


class LeftControlPanel extends Component {
  render() {
    return(
      <MainPanel>
        <SearchBar>
          <SearchField placeholder='What are you looking for?' type='text'/>
          <SearchButton type="submit">Search</SearchButton>
        </SearchBar>
        <ButtonPanel>
          <button type='button' className="leftPanelOption1Btn">Option 1</button>
        <button type='button' className="leftPanelOption2Btn">Option 2</button>
      <button type='button' className="leftPanelOption3Btn">Option 3</button>
        </ButtonPanel>
      </MainPanel>
    );
  }
}

export default LeftControlPanel;
