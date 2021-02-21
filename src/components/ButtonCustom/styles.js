import styled from 'styled-components';

export const Wrapper = styled.button`

  background: ${props => props.primary ? "#01c66f" : "#F2F2F2"};
  display: inline-flex;
  border-radius: 3px;
  border: none;
  border-color: ${props => props.primary ? "#01c66f" : "#F2F2F2"};
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
  color: ${props => props.primary ? "#fafdfc" : "rgba(3, 18, 11, 0.6)"};
`;
