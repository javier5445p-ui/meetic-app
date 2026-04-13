import { useState, useEffect } from "react";

const perfiles = [
  {
    nombre: "María", edad: 25, genero: "mujer",
    ciudad: "Lima, Perú", profesion: "Diseñadora", distancia: "3 km",
    intereses: ["Viajes", "Arte", "Fotografía"],
    img: "/img/1.jpg",
    descripcion: "Amante de viajes ✨ Siempre buscando nuevas experiencias y aventuras.",
    fotos: ["/img/11.jpg", "/img/111.jpg"]
  },
  {
    nombre: "Lucía", edad: 23, genero: "mujer",
    ciudad: "Arequipa, Perú", profesion: "Artista", distancia: "5 km",
    intereses: ["Pintura", "Música"],
    img: "/img/2.jpg",
    descripcion: "Creativa 💖 Me encanta el arte, la música y los momentos tranquilos.",
    fotos: ["/img/22.jpg", "/img/222.jpg"]
  },
  {
    nombre: "Sofía", edad: 27, genero: "mujer",
    ciudad: "Cusco, Perú", profesion: "Cantante", distancia: "6 km",
    intereses: ["Música", "Conciertos"],
    img: "/img/3.jpg",
    descripcion: "Música 🌸 Fan de los conciertos y las noches con buena vibra.",
    fotos: ["/img/33.jpg", "/img/333.jpg"]
  },
  {
    nombre: "Andrea", edad: 24, genero: "mujer",
    ciudad: "Trujillo, Perú", profesion: "Estudiante", distancia: "4 km",
    intereses: ["Café", "Lectura"],
    img: "/img/4.jpg",
    descripcion: "Simple 🌷 Disfruto lo pequeño: café, charlas y atardeceres.",
    fotos: ["/img/44.jpg", "/img/444.jpg"]
  },
  {
    nombre: "Carlos", edad: 28, genero: "hombre",
    ciudad: "Lima, Perú", profesion: "Entrenador", distancia: "2 km",
    intereses: ["Gym", "Deporte"],
    img: "/img/a.jpg",
    descripcion: "Deporte 💪 Me gusta entrenar y mantenerme activo.",
    fotos: ["/img/aa.jpg", "/img/aaa.jpg"]
  },
  {
    nombre: "Luis", edad: 30, genero: "hombre",
    ciudad: "Cusco, Perú", profesion: "Freelancer", distancia: "8 km",
    intereses: ["Viajes", "Café"],
    img: "/img/b.jpg",
    descripcion: "Relajado 😎 Planes chill y buena conversación.",
    fotos: ["/img/bb.jpg", "/img/bbb.jpg"]
  },
  {
    nombre: "Jorge", edad: 27, genero: "hombre",
    ciudad: "Lima, Perú", profesion: "Programador", distancia: "3 km",
    intereses: ["Tech", "Gaming"],
    img: "/img/c.jpg",
    descripcion: "Tech 💻 Apasionado por la tecnología.",
    fotos: ["/img/cc.jpg", "/img/ccc.jpg"]
  },
  {
    nombre: "Diego", edad: 29, genero: "hombre",
    ciudad: "Arequipa, Perú", profesion: "Fotógrafo", distancia: "6 km",
    intereses: ["Viajes", "Naturaleza"],
    img: "/img/d.jpg",
    descripcion: "Viajes 🌍 Amo conocer lugares nuevos.",
    fotos: ["/img/dd.jpg", "/img/ddd.jpg"]
  },
  {
    nombre: "Fernando", edad: 31, genero: "hombre",
    ciudad: "Piura, Perú", profesion: "Profesor", distancia: "7 km",
    intereses: ["Lectura", "Café"],
    img: "/img/e.jpg",
    descripcion: "Tranquilo 📚 Buen libro + café = plan perfecto.",
    fotos: ["/img/ee.jpg", "/img/eee.jpg"]
  },
  {
    nombre: "Miguel", edad: 26, genero: "hombre",
    ciudad: "Lima, Perú", profesion: "Entrenador", distancia: "2 km",
    intereses: ["Gym", "Fitness"],
    img: "/img/f.jpg",
    descripcion: "Gym 🔥 Disciplina y energía.",
    fotos: ["/img/ff.jpg", "/img/fff.jpg"]
  },
];

export default function Explorar({ abrirChat }) {
  const [filtro, setFiltro] = useState("todos");
  const [index, setIndex] = useState(0);
  const [animando, setAnimando] = useState(false);

  // 💘 MATCH SYSTEM
  const [matches, setMatches] = useState([]);
  const [matchActual, setMatchActual] = useState(null);

  // 💾 guardar matches
  useEffect(() => {
    localStorage.setItem("matches", JSON.stringify(matches));
  }, [matches]);

  const filtrados =
    filtro === "todos"
      ? perfiles
      : perfiles.filter((p) => p.genero === filtro);

  const perfil = filtrados[index % filtrados.length];

  const siguiente = () => {
    setAnimando(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % filtrados.length);
      setAnimando(false);
    }, 250);
  };

  const darLike = () => {
    setMatches([...matches, perfil]);
    setMatchActual(perfil);
    siguiente();
  };

  return (
    <section id="explorar" className="explorar-container">

      {/* IZQUIERDA */}
      <div className="explorar-left">

        <h2>Descubre personas 🔥</h2>

        <div className="filtro">
          <button onClick={() => { setFiltro("todos"); setIndex(0); }}>Todos</button>
          <button onClick={() => { setFiltro("mujer"); setIndex(0); }}>Mujeres</button>
          <button onClick={() => { setFiltro("hombre"); setIndex(0); }}>Hombres</button>
        </div>

        <div className={`tarjeta-match ${animando ? "fade" : ""}`}>
          <img src={perfil.img} alt={perfil.nombre} />

          <div className="info">
            <h3>{perfil.nombre}, {perfil.edad} ✔️</h3>
            <p>📍 {perfil.ciudad}</p>
            <p>📏 A {perfil.distancia} de ti</p>
            <p>{perfil.descripcion}</p>
          </div>

          <div className="botones-match">
            <button className="btn-no" onClick={siguiente}>❌</button>
            <button className="btn-like" onClick={darLike}>❤️</button>
          </div>
        </div>
      </div>

      {/* DERECHA */}
      <div className="explorar-right">

        <h3>{perfil.nombre}, {perfil.edad}</h3>

        <p>📍 {perfil.ciudad}</p>
        <p>💼 {perfil.profesion}</p>

        <p>{perfil.descripcion}</p>

        <div className="intereses">
          {perfil.intereses.map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>

        <div className="galeria">
          {perfil.fotos.map((f, i) => (
            <img key={i} src={f} alt="foto" />
          ))}
        </div>

        <button className="btn-main" onClick={() => abrirChat(perfil)}>
          Enviar mensaje 💌
        </button>
      </div>

      {/* 💘 POPUP MATCH */}
      {matchActual && (
        <div className="match-popup">
          <h2>💘 ¡Hiciste match!</h2>
          <p>Con {matchActual.nombre}</p>

          <button onClick={() => setMatchActual(null)}>
            Seguir explorando
          </button>
        </div>
      )}

    </section>
  );
}