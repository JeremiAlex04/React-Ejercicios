import { UsuarioProvider } from "./context/UsuarioContext";
import { MostrarUsuario } from "./components/MostrarUsuario";
import { CambiarUsuario } from "./components/CambiarUsuario";

function App() {
  return (
    <UsuarioProvider>
      <h1>Ejemplo de Context API</h1>
      <MostrarUsuario />
      <CambiarUsuario />
    </UsuarioProvider>
  );
}

export default App;
