import { PublicationInputContainer } from "./styles";

export function PublicationInput() {
  return (
    <PublicationInputContainer>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </PublicationInputContainer>
  );
}
