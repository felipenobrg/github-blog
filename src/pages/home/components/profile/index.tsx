import axios from "axios";
import { useEffect, useState } from "react";
import { ImageContainer, ProfileAbout, ProfileContainer, ProfileContent, ProfileText } from "./styles";
import { GithubLogo, Users } from "phosphor-react";

interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: string;
}

export function Profile() { 
  const [profileData, setProfileData] = useState<ProfileProps>({
  avatar_url: "",
  name: "",
  bio: "",
  login: "",
  followers: "",
});

  useEffect(() => {
    async function getProfileData() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/felipenobrg"
        );
        setProfileData(response.data);
        console.log(profileData);
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
        <p><GithubLogo /> {profileData.login}</p>
        <p><Users />{profileData.followers} seguidores</p>
        </ProfileAbout>
        </ProfileText>
      </ProfileContent>
    </ProfileContainer>
  );
}
