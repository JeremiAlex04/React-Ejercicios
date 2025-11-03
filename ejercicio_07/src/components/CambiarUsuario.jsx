import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export function CambiarUsuario() {
  const { setNombre } = useContext(UsuarioContext);

  return (
    <button onClick={() => setNombre("María")}>
      Cambiar usuario a María
    </button>
  );
}
