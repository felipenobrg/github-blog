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
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { ProfileProps } from "../../../../home/components/profile";

interface PostInfoProps {
  postData: ProfileProps;
}

export function PostInfo({ postData }: PostInfoProps) {
  const postDataDate = postData.created_at;
  const date = new Date(postDataDate);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  
  return (
  
    <ProfileInfoContainer>
      <ProfileInfoContent>
        <ProfileInfoButtons>
          <NavLink to={"/"}>
            <FontAwesomeIcon icon={faAngleLeft} /> Voltar
          </NavLink>
          <a href={postData.html_url}>
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileInfoButtons>
        <ProfileInfoTitle>
          <h1>{postData.title}</h1>
        </ProfileInfoTitle>
        <ProfileInfoAbout>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            {postData.user.login}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formattedDate}
          </p>
          <p>
            <FontAwesomeIcon icon={faCommentDots} />
            {postData.comments} comentários
          </p>
        </ProfileInfoAbout>
      </ProfileInfoContent>
    </ProfileInfoContainer>
  );
}
