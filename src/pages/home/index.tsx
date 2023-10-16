import { Header } from "../../components/header";
import { Profile } from "./components/profile";
import { PublicationCard } from "./components/publicationCard";
  
export function Home() {
    return (
        <>
         <Header />
         <Profile />
         <PublicationCard />
        </>
    )
}