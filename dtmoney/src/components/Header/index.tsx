import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  handleOpenModal: () => void;
}

export function Header({ handleOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={handleOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
