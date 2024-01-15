import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchInput, SerchFormContainer } from "./styles";
import { BlogContext } from "../../../../contexts/BlogContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SerchForm(){
  const {register, watch} = useForm<SearchFormInputs>({
    defaultValues: {query: ""},
    resolver: zodResolver(searchFormSchema)
  });
  
  const query = watch("query");
  const {issues, listAllIssues} = useContext(BlogContext);

  useEffect(() => {
    listAllIssues("");
  }, [listAllIssues]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [query, handleSearch])

  async function handleSearch(){
    listAllIssues(query);
  }

  return(
    <SerchFormContainer>
      <div>
        <span>Publicações</span>
        <span>{issues.length} publicações</span>
      </div>
      <SearchInput 
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SerchFormContainer>
  );
}