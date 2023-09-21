import { PublicationInputContainer } from "./styles";

export function PublicationInput() {
  return (
    <PublicationInputContainer>
      <div>
      <h2>Publicações</h2>
      <p>publicações</p>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </PublicationInputContainer>
  );
}
