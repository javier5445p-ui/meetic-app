import { useState } from "react";

export default function Registro({ setVista }) {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistro = () => {
    if (!form.nombre || !form.correo || !form.password) {
      alert("Completa todos los campos");
      return;
    }

    alert("Cuenta creada 💖");
    setVista("login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Crear cuenta</h2>

        <input
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
        />

        <input
          name="correo"
          placeholder="Correo"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />

        <button className="btn-main" onClick={handleRegistro}>
          Registrarse
        </button>

        <p>
          ¿Ya tienes cuenta?{" "}
          <span onClick={() => setVista("login")}>
            Inicia sesión
          </span>
        </p>

      </div>
    </div>
  );
}