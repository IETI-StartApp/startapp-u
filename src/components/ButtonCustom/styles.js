import styled from 'styled-components';

export const Wrapper = styled.button`

  background: ${props => {
    if (props.color === 'red') {
      return "#950740"
    } else if (props.color === 'grey') {
      return "#2D3748"
    }
  }};
  display: inline-flex;
  border-radius: 3px;
  border: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-color: ${props => {
    if (props.color === 'red') {
      return "#950740"
    } else if (props.color === 'grey') {
      return "#2D3748"
    }
  }};
  cursor: pointer;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  height: 40px;

  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 40px;
  color: #fafdfc;
`;
