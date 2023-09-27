import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  ProfileInfoContainer,
  ProfileInfoContent,
  ProfileInfoButtons,
  ProfileInfoAbout,
  ProfileInfoTitle,
} from "./styles";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faCommentDots } from "@fortawesome/free-solid-svg-icons";

export function PostInfo() {
  return (
    <ProfileInfoContainer>
      <ProfileInfoContent>
        <ProfileInfoButtons>
          <NavLink to={"/"}><FontAwesomeIcon icon={faAngleLeft} /> Voltar</NavLink>
          <NavLink to={"/"}>Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></NavLink>
        </ProfileInfoButtons>
        <ProfileInfoTitle>
          <h1>JavaScript data and data structures</h1>
        </ProfileInfoTitle>
        <ProfileInfoAbout>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            felipenobrg
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </p>
          <p>
            <FontAwesomeIcon icon={faCommentDots} />
            comentários
          </p>
        </ProfileInfoAbout>
      </ProfileInfoContent>
    </ProfileInfoContainer>
  );
}
