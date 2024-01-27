import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;
  height: 16.25rem;
  overflow: hidden;
  border: 2px solid transparent;

  p {
    font-size: 1rem;
    font-family: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
    margin-top: 1.25rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  transition: border 0.7s;

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
    cursor: pointer;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    font-family: 700;
    line-height: 160%;
    color: ${(props) => props.theme["base-title"]};
    width: 70%;
  }

  span {
    font-size: 0.875rem;
    font-family: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
    width: 30%;
    text-align: right;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
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
