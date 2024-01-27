import { useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import Markdown from "react-markdown";

import { PostContainer, PostContent, PostHeader } from "./styles";
import { GitHubIssue } from "../../../../../../contexts/BlogContext";

interface PostProps {
  issue: GitHubIssue
}

export function Post({ issue }: PostProps) {
  const navigate = useNavigate();

  return (
    <PostContainer onClick={() => navigate(`/post/${issue.number}`)}>
      <PostHeader>
        <h2>
          {issue.title}
        </h2>

        <span>
          {formatDistance(new Date(), issue.created_at, { locale: ptBR })}
        </span>
      </PostHeader>
      
      <PostContent>
        <Markdown>
          {issue.body}
        </Markdown>
      </PostContent>
    </PostContainer>
  );
}