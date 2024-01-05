import styled from "styled-components";

export const SerchFormContainer = styled.form`
  margin-top: 13.75rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span:nth-of-type(1) {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 160%;
    }

    span:nth-of-type(2){
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;
      text-align: right;
    }
  }
`;

export const SearchInput = styled.input`
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme["base-border"]};
  background: ${(props) => props.theme["base-input"]};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  color:  ${(props) => props.theme["base-text"]};

  &:focus {
    border: 1px solid ${(props) => props.theme["blue"]};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;
