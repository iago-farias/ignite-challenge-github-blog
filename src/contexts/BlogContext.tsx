import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../lib/axios";

interface BlogContextType {
  user?: GitHubUser;
}

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  followers: number;
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogContextProvider({children} : BlogContextProviderProps){
  const [user, setUser] = useState<GitHubUser>();

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData(){
    const response = await api.get("/users/iago-farias");

    const userData = response.data as GitHubUser;
    
    setUser(userData);
  }
  
  return(
    <BlogContext.Provider
      value={{user}}
    >
      {
        children
      }
    </BlogContext.Provider>
  )
}