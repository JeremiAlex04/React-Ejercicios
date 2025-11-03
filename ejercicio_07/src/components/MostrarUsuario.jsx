import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export function MostrarUsuario() {
  const { nombre } = useContext(UsuarioContext);
  return <p>Usuario actual: {nombre}</p>;
}
