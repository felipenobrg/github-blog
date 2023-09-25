import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo-github-blog.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoImg} alt="" />
        </HeaderContainer>
    )
}