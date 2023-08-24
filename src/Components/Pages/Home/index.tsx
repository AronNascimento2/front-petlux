import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const Home = () => {
  const history = useNavigate();
  return (
    <S.Container>
      <p>Home</p>
      <button onClick={() => history("/")}>Sair</button>
    </S.Container>
  );
};
