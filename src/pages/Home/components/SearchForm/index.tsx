import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchInput, SerchFormContainer } from "./styles";
import { BlogContext } from "../../../../contexts/BlogContext";
import { Skeleton } from "../../../../components/Skeleton/styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){
  const {register, watch} = useForm<SearchFormInputs>({
    defaultValues: {query: ""},
    resolver: zodResolver(searchFormSchema)
  });
  
  const query = watch("query");
  const {issues, isLoadingIssues, listAllIssues} = useContext(BlogContext);

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
       {
        isLoadingIssues ? (
          <div style={{width: 120, height: 20, marginBottom: 0 }}>
            <Skeleton />
          </div>
        ) : (
          <span>{issues.length} publicaç{issues.length === 1 ? "ão" : "ões"}</span>
        ) 
       }
      </div>
      <SearchInput
        disabled={isLoadingIssues}
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SerchFormContainer>
  );
}