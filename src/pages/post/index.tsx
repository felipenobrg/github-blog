import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { api } from "../../lib/axios";
import { PostInfo } from "./publicationDetails/components/postInfo";
import { ProfileProps } from "../home/components/profile";
import { PostContent } from "./publicationDetails/components/postContent";


export function PublicationDetails() {
  const [postData, setPostData] = useState<ProfileProps>({} as ProfileProps);
  const [isLoading, setIsLoading] = useState(true);
  
  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/felipenobrg/github-blog/issues/${id}`
      );
      setPostData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getPostDetails();
  }, [getPostDetails]);

  return (
    <>
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : postData ? (
        <>
          <PostInfo postData={postData} />
          <PostContent postData={postData} />
        </>
      ) : (
        <p>Página não encontrada</p>
      )}
    </>
  );
}
