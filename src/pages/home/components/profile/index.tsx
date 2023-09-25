import axios from "axios";
import { useEffect, useState } from "react";
import {
  ImageContainer,
  ProfileAbout,
  ProfileContainer,
  ProfileContent,
  ProfileText,
  UrlContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: string;
  html_url: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileProps>({
    avatar_url: "",
    name: "",
    bio: "",
    login: "",
    followers: "",
    html_url: "",
  });

  useEffect(() => {
    async function getProfileData() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/felipenobrg"
        );
        setProfileData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      <ProfileContent>
        <ImageContainer>
          <img src={profileData.avatar_url} alt="" />
        </ImageContainer>
        <ProfileText>
          <h1>{profileData.name}</h1>
          <p>{profileData.bio}</p>
          <ProfileAbout>
            <p>
            <FontAwesomeIcon icon={faGithub} /> {profileData.login}
            </p>
            <p>
            <FontAwesomeIcon icon={faUser} />
              {profileData.followers} seguidores
            </p>
          </ProfileAbout>
        </ProfileText>

        <UrlContainer>
          <a href={profileData.html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </UrlContainer>
      </ProfileContent>
    </ProfileContainer>
  );
}
