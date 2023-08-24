import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Users } from "../../../constants/Users";
import { Loader } from "../../Loader";
// ...

export const RecoveryPassword = () => {
  const history = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSetText = useCallback(async () => {
    const emailInputValue = emailInputRef.current?.value;

    if (emailInputValue && emailInputValue.trim() !== "") {
      setLoading(true);

      const user = Users.find((user) => user.email === emailInputValue);

      await new Promise(resolve => setTimeout(resolve, 2000));

      setLoading(false);

      if (user) {
        toast.success("Nova senha enviada para seu email!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        history("/"); // Redireciona imediatamente em caso de sucesso
      } else {
        toast.error(
          "Email não encontrado. Por favor, verifique o email inserido.",
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
        setTimeout(() => {
          setLoading(false); // Define o loading para false após o erro
        }, 2000);
      }
    } else {
      toast.error("Por favor, insira um email válido.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

  }, [history]);

  return (
    <S.Container>
      {loading ? <Loader /> : (
        <>
          <div className="container-logo">
            <img src={"src/assets/petlux-logo.png"} alt="" className="logo" />
          </div>
          <div className="container-div">
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="input"
              ref={emailInputRef}
            />
          </div>
          <div className="buttons-recovery">
            <button onClick={() => history("/")} className="cancel-button">
              Cancelar
            </button>
            <button onClick={handleSetText}>Enviar</button>
          </div>
        </>
      )}
    </S.Container>
  );
};
