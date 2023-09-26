import {
  HeaderButton,
  HeaderButtonText,
  HeaderContainer,
  HeaderImage,
  HeaderSubtitle,
  HeaderTitle,
} from "./headr.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src="/icon.png" />
      <HeaderTitle>Assista aos melhores animes</HeaderTitle>
      <HeaderSubtitle>Faça o download agora mesmo</HeaderSubtitle>
      <a href="/arquivo">
      <button>
          baixar
      </button>
      </a>
    </HeaderContainer>
  );
};
