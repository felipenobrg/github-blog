import axios from "axios";
import { useEffect, useState } from "react";
import {
  CenteredPublicationCardContainer,
  PublicationCardContainer,
  PublicationCardContent,
  PublicationInputContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { Spinner } from "../../../../components/spinner";

interface PublicationItem {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function PublicationCard() {
  const [publicationData, setPublicationsData] = useState<PublicationItem[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPublicationData = publicationData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function getPublicationsData() {
      try {
        const response = await axios.get(
          "https://api.github.com/search/issues?q=repo:felipenobrg/github-blog"
        );

        setPublicationsData(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }

    getPublicationsData();
  }, []);

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
    <>
      <PublicationInputContainer>
        <form>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </PublicationInputContainer>
      <CenteredPublicationCardContainer>
        <PublicationCardContainer>
          {filteredPublicationData.length > 0 ? (
            filteredPublicationData.map((item) => (
              <div key={item.id}>
                <Link to={`/publication/${item.id}`}>
                <PublicationCardContent>
                  <div className="name-time">
                    <h1>{item.title}</h1>
                    <p>{calculateTimeAgo(item.created_at)}</p>
                  </div>
                  <p>{truncateText(item.body, 200)}</p>
                </PublicationCardContent>
                </Link>
              </div>
            ))
          ) : (
              <Spinner />
          )}
        </PublicationCardContainer>
      </CenteredPublicationCardContainer>
    </>
  );
}
