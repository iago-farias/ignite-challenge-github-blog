import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa6";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import { LinkButton, PostContent, PostDescription } from "./styles";
import { api } from "../../lib/axios";
import { GitHubIssue, GitHubUser } from "../../contexts/BlogContext";


export function Post() {
  const [issue, setIssue] = useState<GitHubIssue>({
    body: "",
    comments: 0,
    created_at: new Date(),
    html_url: "",
    number: 0,
    title: "",
    user: {login: ""} as GitHubUser
  });
  const navigate = useNavigate();

  const {number} = useParams();

  useEffect(() => {
    getIssue();
  }, []);

  async function getIssue(){
    const response = await api.get(`repos/iago-farias/ignite-challenge-github-blog/issues/${number}`);
    
    setIssue(response.data);
  }

  return (
    <div>
      <PostDescription>
        <div className="actionsContainer">
          <LinkButton onClick={() => navigate("/")}>
            <FaChevronLeft />
            Voltar
          </LinkButton>
          
          <a href={issue.html_url}>
            <LinkButton>
              VER NO GITHUB

              <FaArrowUpRightFromSquare />
            </LinkButton>
          </a>
        </div>

        <h1>{issue.title}</h1>

        <div className="postInfoContainer">
          <div>
            <FaGithub />
            <span>
              {issue.user.login}
            </span>
          </div>
          <div>
            <FaCalendarDay />
            <span>
              {formatDistance(new Date(), issue.created_at, {locale: ptBR})}
            </span>
          </div>
          <div>
            <FaComment />
            <span>
              {issue.comments} Comentários
            </span>
          </div>
        </div>
      </PostDescription>

      <PostContent>
        <Markdown>
          {issue.body}
        </Markdown>
      </PostContent>
    </div>
  )
}