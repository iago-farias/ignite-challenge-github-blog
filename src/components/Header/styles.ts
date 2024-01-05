import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background-color: ${props => props.theme['base-profile']};
`

export const HeaderBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 18.5rem;
  object-fit: cover;
`