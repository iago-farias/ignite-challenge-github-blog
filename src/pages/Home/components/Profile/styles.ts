import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin: -5.25rem auto;
  z-index: 2;
  position: relative;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  div {
    .userNameContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 0.5rem;

      p {
        color: ${(props) => props.theme["base-title"]};
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 130%;
      }

      a {
        font-size: 0.75rem;
        font-family: 700;
        line-height: 160%;
        color: ${(props) => props.theme["blue"]};
        text-decoration: none;
        transition: text-decoration 0.7s;
        align-items: center;

        &:hover {
          text-decoration: underline;
        }

        svg {
          margin-left: 0.5rem;
        }
      }
    }

    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1rem;
      font-weight: 400;
      line-height: 160%;
    }

    .userInfoContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
      margin-top: 1.5rem;

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
  }
`;
