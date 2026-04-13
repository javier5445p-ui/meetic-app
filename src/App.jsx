import { useState } from "react";
import "./App.css";

import Navbar from "./componentes/Navbar";

import Inicio from "./paginas/Inicio";
import Beneficios from "./paginas/Beneficios";
import Explorar from "./paginas/Explorar";
import Consejos from "./paginas/Consejos";
import Testimonios from "./paginas/Testimonios";
import Footer from "./componentes/Footer";

import Login from "./paginas/Login";
import Registro from "./paginas/Registro";

import ChatFloat from "./componentes/ChatFloat";

function App() {
  const [vista, setVista] = useState("home");

  const [chatAbierto, setChatAbierto] = useState(false);
  const [personaChat, setPersonaChat] = useState(null);

  const abrirChat = (persona) => {
    setPersonaChat(persona);
    setChatAbierto(true);
  };

  return (
    <>
      <Navbar setVista={setVista} />

      {/* HOME */}
      {vista === "home" && (
        <>
          <section id="inicio">
            <Inicio setVista={setVista} />
          </section>

          <section id="beneficios">
            <Beneficios />
          </section>

          <section id="explorar">
            <Explorar abrirChat={abrirChat} />
          </section>

          <section id="consejos">
            <Consejos />
          </section>

          <section id="testimonios">
            <Testimonios />
          </section>

          {/* 💎 FOOTER AQUÍ */}
          <Footer />
        </>
      )}

      {/* LOGIN */}
      {vista === "login" && <Login setVista={setVista} />}

      {/* REGISTRO */}
      {vista === "registro" && <Registro setVista={setVista} />}

      {/* CHAT */}
      <ChatFloat
        abierto={chatAbierto}
        setAbierto={setChatAbierto}
        persona={personaChat}
      />
    </>
  );
}

export default App;