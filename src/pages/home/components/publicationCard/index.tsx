import axios from "axios";
import { useEffect, useState } from "react";
import { PublicationCardContainer } from "./styles";

interface PublicationData {
  items: {
    id: number;
    title: string;
    body: string;
  }[];
}

export function PublicationCard() {
  const [publicationData, setPublicationsData] = useState<PublicationData>({
    items: [],
  });

  useEffect(() => {
    async function getPublicationsData() {
      try {
        const response = await axios.get(
          "https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge"
        );
        setPublicationsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPublicationsData();
  }, []);

  const publicationsList = publicationData.items ? (
    publicationData.items.map((item) => (
      <PublicationCardContainer key={item.id}>
        <div>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      </PublicationCardContainer>
    ))
  ) : (
    <p>Loading</p>
  );

  return <>{publicationsList}</>;
}
