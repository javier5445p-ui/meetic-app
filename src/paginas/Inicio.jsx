import { useState } from "react";
import Carrusel from "../componentes/Carrusel";

export default function Inicio({ setVista }) {
  const [soy, setSoy] = useState("");
  const [busco, setBusco] = useState("");
  const [edadMin, setEdadMin] = useState(18);
  const [edadMax, setEdadMax] = useState(30);

  const buscar = () => {
    if (!soy || !busco) {
      alert("Selecciona tus preferencias 💘");
      return;
    }

    // 🔥 Guardamos filtros (para usar en explorar luego)
    localStorage.setItem(
      "filtroBusqueda",
      JSON.stringify({
        soy,
        busco,
        edadMin,
        edadMax
      })
    );

    // 🚀 ir a explorar
    setVista("home");

    setTimeout(() => {
      document
        .getElementById("explorar")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="hero">

      {/* 🎠 FONDO */}
      <Carrusel />

      {/* TEXTO */}
      <div className="hero-left">
        <h1>¡Sitio de citas 100% gratis! 💘</h1>
        <p>Conecta, chatea y encuentra a alguien especial cerca de ti</p>

        <button
          className="btn-main"
          onClick={() => setVista("registro")}
        >
          Empezar ahora 🚀
        </button>
      </div>

      {/* 📋 FORMULARIO */}
      <div className="hero-card">
        <h3>Sal con solteros en línea ahora</h3>

        <p>Soy</p>
        <div className="opciones">
          <button
            className={soy === "hombre" ? "active" : ""}
            onClick={() => setSoy("hombre")}
          >
            Hombre
          </button>

          <button
            className={soy === "mujer" ? "active" : ""}
            onClick={() => setSoy("mujer")}
          >
            Mujer
          </button>
        </div>

        <p>Busco conocer a</p>
        <div className="opciones">
          <button
            className={busco === "hombre" ? "active" : ""}
            onClick={() => setBusco("hombre")}
          >
            Hombre
          </button>

          <button
            className={busco === "mujer" ? "active" : ""}
            onClick={() => setBusco("mujer")}
          >
            Mujer
          </button>
        </div>

        <p>Edad</p>
        <div className="edad">
          <select value={edadMin} onChange={(e) => setEdadMin(e.target.value)}>
            {[18, 20, 25, 30, 35, 40].map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>

          <span>y</span>

          <select value={edadMax} onChange={(e) => setEdadMax(e.target.value)}>
            {[25, 30, 35, 40, 45, 50].map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>

        <button className="btn-main" onClick={buscar}>
          Encontrar el amor ❤️
        </button>
      </div>

    </section>
  );
}