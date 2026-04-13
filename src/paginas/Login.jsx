import { useState } from "react";

export default function Login({ setVista }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!correo || !password) {
      alert("Completa todos los campos");
      return;
    }

    alert("Inicio de sesión exitoso 💘");
    setVista("home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Iniciar sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-main" onClick={handleLogin}>
          Entrar
        </button>

        <p>
          ¿No tienes cuenta?{" "}
          <span onClick={() => setVista("registro")}>
            Regístrate
          </span>
        </p>
        

      </div>
    </div>
  );
}