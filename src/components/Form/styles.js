import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  align-items: self-start;
  width: 350px;
  @media all and (max-width: 750px) {
    width: auto;
  }
`;
export const TextArea = styled.div`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #4A5568;
  padding: 11px;
`;

export const InputArea = styled.div`
  padding: 11px;
  @media all and (max-width: 750px) {
    width: auto;
  }
`;

export const FooterWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-rows: auto;
`;

export const CheckBoxArea = styled.div`
  grid-row: 1 / 2;
  display: flex;
  align-items: stretch;
`;

export const ForgotPasswdArea = styled.div`
  display: grid;
  text-align: center;
  grid-row: 1 / 2;
`;

export const ButtonContent = styled.div`
  align-content: center;
  place-self: center;
  width: fit-content;
  flex-shrink: 0;
  display: grid;
  grid-row: 3 / 4;
`;
