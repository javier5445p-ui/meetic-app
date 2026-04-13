import { useState, useEffect } from "react";

export default function ChatFloat({ abierto, setAbierto, persona }) {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  // 💘 cuando seleccionas persona desde explorar
  useEffect(() => {
    if (persona) {
      setMensajes([
        {
          texto: `Hola, soy ${persona.nombre} 😊 ¿Cómo estás?`,
          tipo: "bot"
        }
      ]);
      setAbierto(true);
    }
  }, [persona, setAbierto]);

  const enviarMensaje = () => {
    if (!mensaje.trim()) return;

    const nuevo = { texto: mensaje, tipo: "user" };

    setMensajes((prev) => [...prev, nuevo]);
    setMensaje("");

    // 🤖 respuesta automática
    setTimeout(() => {
      setMensajes((prev) => [
        ...prev,
        {
          texto: `Me gusta hablar contigo 😏`,
          tipo: "bot"
        }
      ]);
    }, 800);
  };

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <div className="chat-float" onClick={() => setAbierto(!abierto)}>
        💬
      </div>

      {/* CHAT */}
      {abierto && (
        <div className="chat-box-float">

          {/* HEADER */}
          <div className="chat-header">
            {persona ? `Chat con ${persona.nombre} 💘` : "Chat Meetic 💘"}
            <span onClick={() => setAbierto(false)}>✖</span>
          </div>

          {/* MENSAJES */}
          <div className="chat-mensajes">
            {mensajes.map((m, i) => (
              <div key={i} className={`mensaje ${m.tipo}`}>
                {m.texto}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="chat-input">
            <input
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe algo..."
            />
            <button onClick={enviarMensaje}>➤</button>
          </div>

        </div>
      )}
    </>
  );
}