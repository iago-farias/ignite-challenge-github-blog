import { useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import { PostContainer } from "./styles";
import { GitHubIssue } from "../../../../../../contexts/BlogContext";

interface PostProps {
  issue: GitHubIssue
}

export function Post({ issue } : PostProps) {
  const navigate = useNavigate();

  return (
    <PostContainer onClick={() => navigate(`/post/${issue.number}`)}>
      <div>
        <h2>
          {issue.title}
        </h2>

        <span>
          {formatDistance(new Date(), issue.created_at, {locale: ptBR})}
        </span>
      </div>

      <p>
        {issue.body}
      </p>
    </PostContainer>
  );
}