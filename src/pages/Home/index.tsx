import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { SerchForm } from "./components/SerchForm";

export function Home(){
  return(
    <div>
      <Profile />
      <SerchForm />
      <Posts />
    </div>
  )
}