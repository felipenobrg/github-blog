import { Header } from "../../components/header";
import { Profile } from "./components/profile";
import { PublicationCard } from "./components/publicationCard";
import { PublicationInput } from "./components/publicationInput";

export function Home() {
    return (
        <>
         <Header />
         <Profile />
         <PublicationInput />
         <PublicationCard />
        </>
    )
}