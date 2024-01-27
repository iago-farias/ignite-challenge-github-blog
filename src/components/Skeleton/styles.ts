import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(217, 1%, 64%);
  }
  100% {
    background-color: hsl(210, 1%, 37%);
  }
`;

export const Skeleton = styled.div`
  animation: ${skeletonLoading} 1s linear infinite alternate;
  display: flex;
  flex: 1;
  width: inherit;
  height: inherit;
  border-radius: 8px;
`;
