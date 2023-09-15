import { Header } from "../../components/header";
import { Profile } from "./components/profile";
import { Publications } from "./components/publications";


export function Home() {
    return (
        <>
         <Header />
         <Profile />
         <Publications />
        </>
    )
}