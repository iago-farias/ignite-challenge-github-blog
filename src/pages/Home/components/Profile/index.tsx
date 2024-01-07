import { useContext } from "react";
import { FaArrowUpRightFromSquare, FaGithub, FaBuilding, FaUserGroup } from "react-icons/fa6";
import { ProfileContainer } from "./styles";
import { BlogContext } from "../../../../contexts/BlogContext";

export function Profile(){
  const {user} = useContext(BlogContext);

  return(
    <ProfileContainer>
      <img src={user?.avatar_url} alt="user profile" />

      <div>
        <div className="userNameContainer">
          <p>{user?.name}</p>

          <a href={user?.html_url}>
            GITHUB

            <FaArrowUpRightFromSquare />
          </a>
        </div>
        {
          user?.bio && (
            <p>
              {user?.bio}
            </p>
          )
        }
        <div className="userInfoContainer">
          <div>
            <FaGithub />
            <span>
              {user?.login}
            </span>
          </div>
          {
            user?.company && (
              <div>
                <FaBuilding />
                <span>
                  {user?.company}
                </span>
              </div>
            )
          }
          <div>
            <FaUserGroup />
            <span>
            {user?.followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
}