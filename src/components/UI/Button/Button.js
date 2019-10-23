import styled from 'styled-components';

const DotsButton = styled.button`
  padding: 15px 20px;
  border: ${props =>
    props.secondary
      ? '2px solid #333333'
      : '0px' && props.third
      ? '0px'
      : '0px'};
  color: ${props => (props.secondary ? '#333333' : '#ffffff')};
  outline: none;
  background-color: ${props =>
    props.secondary
      ? '#ffffff'
      : '#333333' && props.third
      ? 'green'
      : '#333333'};
  cursor: pointer;
  border-radius: 0px;
  text-transform: uppercase;
  font-weight: ${props => (props.secondary ? '800' : '600')};
  font-size: 12px;
`;

export default DotsButton;
