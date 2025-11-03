import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [nombre, setNombre] = useState("Pedro");

  return (
    <UsuarioContext.Provider value={{ nombre, setNombre }}>
      {children}
    </UsuarioContext.Provider>
  );
}
