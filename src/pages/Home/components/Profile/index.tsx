import { FaArrowUpRightFromSquare, FaGithub, FaBuilding, FaUserGroup } from "react-icons/fa6";
import { ProfileContainer } from "./styles";

export function Profile(){
  return(
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/61480933?v=4" alt="user profile" />

      <div>
        <div className="userNameContainer">
          <p>Iago Farias</p>

          <a href="https://github.com/iago-farias">
            GITHUB

            <FaArrowUpRightFromSquare />
          </a>
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>

        <div className="userInfoContainer">
          <div>
            <FaGithub />
            <span>
              iago-farias
            </span>
          </div>
          <div>
            <FaBuilding />
            <span>
              Inside The Box
            </span>
          </div>
          <div>
            <FaUserGroup />
            <span>
              8 seguidores
            </span>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
}