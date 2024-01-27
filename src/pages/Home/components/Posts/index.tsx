import { useContext } from "react";

import { PostsContainer } from "./styles";
import { Post } from "./components/Post";
import { BlogContext } from "../../../../contexts/BlogContext";
import { Skeleton } from "../../../../components/Skeleton/styles";

export function Posts() {
  const { issues, isLoadingIssues } = useContext(BlogContext);

  return (
    <PostsContainer>
      {
        isLoadingIssues ? (
          <>
            {
              Array.from({ length: 10 }).map((_, index) => (
                <div key={index} style={{ height: '16.25rem' }}>
                  <Skeleton />
                </div>
              ))
            }
          </>
        ) : (
          <>
            {
              issues.map(issue => (
                <Post
                  key={issue.number}
                  issue={issue}
                />
              ))
            }
          </>
        )
      }
    </PostsContainer>
  );
}