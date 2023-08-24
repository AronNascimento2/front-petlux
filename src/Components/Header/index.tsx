import { Link, Outlet } from "react-router-dom";
import * as S from "./styles";
export const Header = () => {
  return (
    <S.Container>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Sair</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </S.Container>
  );
};
