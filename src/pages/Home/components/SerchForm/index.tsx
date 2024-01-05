import { SearchInput, SerchFormContainer } from "./styles";

export function SerchForm(){
  return(
    <SerchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <SearchInput placeholder="Buscar conteúdo" />
    </SerchFormContainer>
  );
}