import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../lib/axios";

interface BlogContextType {
  user?: GitHubUser;
  issues: GitHubIssue[];
  isLoadingIssues: boolean;
  listAllIssues: (query: string) => Promise<void>
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  followers: number;
}

export interface GitHubIssue {
  number: number;
  title: string;
  body: string;
  html_url: string;
  created_at: Date;
  comments: number;
  user: GitHubUser;
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [user, setUser] = useState<GitHubUser>();
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [isLoadingIssues, setIsloadingIssues] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const response = await api.get("/users/iago-farias");

    const userData = response.data as GitHubUser;

    setUser(userData);
  }

  async function listAllIssues(query: string) {
    setIsloadingIssues(true);
    const response = await api.get(`/search/issues?q=${query}%20repo:iago-farias/ignite-challenge-github-blog`);
    
    const { items } = response.data as {items: GitHubIssue[]};
    
    setIssues(items);
    setIsloadingIssues(false);
  }

  return (
    <BlogContext.Provider
      value={{
        user,
        issues,
        isLoadingIssues,
        listAllIssues
      }}
    >
      {
        children
      }
    </BlogContext.Provider>
  )
}