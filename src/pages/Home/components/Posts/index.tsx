import { useContext } from "react";

import { PostsContainer } from "./styles";
import { Post } from "./components/Post";
import { BlogContext } from "../../../../contexts/BlogContext";

export function Posts(){
  const {issues} = useContext(BlogContext);

  return(
    <PostsContainer>
     {
      issues.map(issue => (
        <Post 
          key={issue.number}
          issue={issue}
        />
      ))
     }
    </PostsContainer>
  );
}