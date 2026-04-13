import { useState } from "react";

export default function TarjetaSwipe({ perfiles, abrirChat }) {
  const [index, setIndex] = useState(0);
  const [animando, setAnimando] = useState(false);

  if (perfiles.length === 0) {
    return <p>No hay perfiles disponibles</p>;
  }

  const perfil = perfiles[index % perfiles.length];

  const siguiente = () => {
    setAnimando(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % perfiles.length);
      setAnimando(false);
    }, 250);
  };

  return (
    <div className="explorar-contenido">

      {/* IZQUIERDA - TARJETA */}
      <div className={`tarjeta-match ${animando ? "fade" : ""}`}>
        <img src={perfil.img} alt={perfil.nombre} />

        <div className="info">
          <h3>{perfil.nombre}, {perfil.edad}</h3>
          <p>{perfil.descripcion}</p>
        </div>

        <div className="botones-match">
          <button className="btn-no" onClick={siguiente}>❌</button>
          <button className="btn-like" onClick={siguiente}>❤️</button>
        </div>
      </div>

      {/* DERECHA */}
      <div className="explorar-right">
        <h3>Conoce más 💬</h3>

        <p>{perfil.descripcion}</p>

        <div className="galeria">
          {perfil.fotos.map((f, i) => (
            <img key={i} src={f} alt="foto" />
          ))}
        </div>

        <button
          className="btn-main"
          onClick={() => abrirChat(perfil)}
        >
          Enviar mensaje 💌
        </button>
      </div>

    </div>
  );
}