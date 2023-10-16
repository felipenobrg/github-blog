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
import { Spinner } from "../../../../components/spinner";
import { api } from "../../../../lib/axios";

export interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: string;
  html_url: string;
  title: string;
  user: string;
  created_at: string;
  comments: string;
  body: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProfileData() {
      try {
        const response = await api.get(
          `/users/felipenobrg`
        );
        setProfileData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : profileData ? (
        <ProfileContent>
          <>
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
          </>
        </ProfileContent>
      ) : (
        <p>Sem dados do perfil disponível.</p>
      )}
    </ProfileContainer>
  );
}
