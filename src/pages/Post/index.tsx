import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa6";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import { LinkButton, PostContent, PostDescription } from "./styles";
import { api } from "../../lib/axios";
import { GitHubIssue, GitHubUser } from "../../contexts/BlogContext";
import { Skeleton } from "../../components/Skeleton/styles";

export function Post() {
  const [issue, setIssue] = useState<GitHubIssue>({
    body: "",
    comments: 0,
    created_at: new Date(),
    html_url: "",
    number: 0,
    title: "",
    user: { login: "" } as GitHubUser
  });
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { number } = useParams();

  useEffect(() => {
    getIssue();
  }, []);

  async function getIssue() {
    setIsLoading(true)
    const response = await api.get(`repos/iago-farias/ignite-challenge-github-blog/issues/${number}`);

    setIssue(response.data);
    setIsLoading(false)
  }

  return (
    <div>
      <PostDescription>
        <div className="actionsContainer">
          <LinkButton onClick={() => navigate("/")}>
            <FaChevronLeft />
            Voltar
          </LinkButton>

          {
            isLoading ? (
              <div style={{ width: 100, height: 30 }}>
                <Skeleton />
              </div>
            ) : (
              <a href={issue.html_url} target="_blank">
                <LinkButton>
                  VER NO GITHUB

                  <FaArrowUpRightFromSquare />
                </LinkButton>
              </a>
            )
          }
        </div>
        {
          isLoading ? (
            <div style={{ width: "90%", height: 30 }}>
              <Skeleton />
            </div>
          ) : (
            <h1>{issue.title}</h1>
          )
        }
        <div className="postInfoContainer">
          {
            isLoading ? (
              <>
                <div style={{ width: 120, height: 30 }}>
                  <Skeleton />
                </div>
                <div style={{ width: 120, height: 30 }}>
                  <Skeleton />
                </div>
                <div style={{ width: 120, height: 30 }}>
                  <Skeleton />
                </div>
              </>
            ) : (
              <>
                <div>
                  <FaGithub />
                  <span>
                    {issue.user.login}
                  </span>
                </div>
                <div>
                  <FaCalendarDay />
                  <span>
                    {formatDistance(new Date(), issue.created_at, { locale: ptBR })}
                  </span>
                </div>
                <div>
                  <FaComment />
                  <span>
                    {issue.comments} Comentários
                  </span>
                </div>
              </>
            )
          }
        </div>
      </PostDescription>
      <PostContent>
        {
          isLoading ? (
            <div
              style={{ width: "100%", height: 400 }}
            >
              <Skeleton />
            </div>
          ) : (
            <Markdown>
              {issue.body}
            </Markdown>
          )
        }
      </PostContent>
    </div>
  )
}