import { HeaderBackgroundImage, HeaderContainer } from "./styles";

import cover from '../../assets/Cover.svg';

export function Header(){
  return(
    <HeaderContainer>
      <HeaderBackgroundImage src={cover} />
    </HeaderContainer>
  );
}