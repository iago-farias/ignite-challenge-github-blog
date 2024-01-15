import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";

export function Home(){
  return(
    <div>
      <Profile />
      <SearchForm />
      <Posts />
    </div>
  )
}