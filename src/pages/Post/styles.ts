import styled from "styled-components";

export const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin: -5.25rem auto;
  z-index: 2;
  position: relative;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
    font-family: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  .actionsContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      text-decoration: none;
    }
  }

  .postInfoContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;

    div {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme["base-label"]};
      }

      span {
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: 400;
        line-height: 160%;
      }
    }
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  margin-top: 5.75rem;
  font-family: "Nunito";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};

  img {
    width: 100%;
    height: auto;
  }

  a {
    color: ${(props) => props.theme["blue"]};
  }
`;

export const LinkButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["blue"]};
  border: 1px solid transparent;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    transition:  border-bottom 0.7s;
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;
