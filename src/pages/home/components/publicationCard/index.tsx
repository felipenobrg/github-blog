import axios from "axios";
import { useEffect, useState } from "react";
import { CenteredPublicationCardContainer, PublicationCardContainer, PublicationCardContent } from "./styles";

interface PublicationItem {
  id: number;
  title: string;
  body: string;
  created_at: string; 
}

export function PublicationCard() {
  const [publicationData, setPublicationsData] = useState<PublicationItem[]>([]);

  useEffect(() => {
    async function getPublicationsData() {
      try {
        const response = await axios.get(
          "https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge"
        );

        setPublicationsData(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }

    getPublicationsData();
  }, []);

  console.log(publicationData)

  const calculateTimeAgo = (dateString: string) => {
    const currentDate = new Date();
    const createdAtDate = new Date(dateString);
  
    const monthsAgo =
      (currentDate.getFullYear() - createdAtDate.getFullYear()) * 12 +
      (currentDate.getMonth() - createdAtDate.getMonth());
  
    if (monthsAgo === 0) {
      const daysAgo = Math.floor(
        (currentDate.getTime() - createdAtDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      return `${daysAgo} dias`;
    }
  
    return `${monthsAgo} meses`;
  };
  
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
  };


  return (
    <CenteredPublicationCardContainer>
    <PublicationCardContainer>
      {publicationData.length > 0 ? (
        publicationData.map((item) => (
          <div key={item.id}>
            <PublicationCardContent>
              <div className="name-time">
              <h1>{item.title}</h1>
              <p>{calculateTimeAgo(item.created_at)}</p>
              </div>
              <p>{truncateText(item.body, 300)}</p>
            </PublicationCardContent>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </PublicationCardContainer>
    </CenteredPublicationCardContainer>
  );
}
