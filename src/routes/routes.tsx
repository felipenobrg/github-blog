import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { PublicationDetails } from "../pages/home/components/publicationDetails";

export function Router() {
    return (
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/publication/:id"} element={<PublicationDetails />}/>
        </Routes>
    )
}