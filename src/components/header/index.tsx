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
      <HeaderButton onClick={() => alert("download/ProxtyVPN-v18.16.0-x64.txt")}>
        <HeaderButtonText>Baixar</HeaderButtonText>
      </HeaderButton>
    </HeaderContainer>
  );
};
