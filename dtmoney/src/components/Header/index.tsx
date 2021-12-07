import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onOpen: () => void;
}

export function Header({ onOpen }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="dtmoney" />
          <button type="button" onClick={onOpen}>
            Nova transaçào{" "}
          </button>
        </Content>
      </Container>
    </>
  );
}
