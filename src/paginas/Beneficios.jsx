import { motion } from "framer-motion";

export default function Beneficios() {
  const data = [
    {
      icono: "🔥",
      titulo: "Matches inteligentes",
      texto:
        "Nuestro sistema te conecta con personas realmente compatibles según tus intereses, edad y estilo de vida. No es solo deslizar, es encontrar a alguien que de verdad encaje contigo."
    },
    {
      icono: "💬",
      titulo: "Chat en tiempo real",
      texto:
        "Habla sin límites con tus matches. Conversaciones fluidas, rápidas y sin complicaciones para que la conexión no se pierda en ningún momento."
    },
    {
      icono: "⚡",
      titulo: "Rápido y sencillo",
      texto:
        "Olvídate de procesos largos. En pocos pasos ya estás explorando perfiles, conectando y viviendo la experiencia completa."
    },
    {
      icono: "💖",
      titulo: "Conexiones reales",
      texto:
        "Aquí no buscamos cantidad, sino calidad. Personas reales, con intenciones reales, listas para conocer a alguien especial."
    },
    {
      icono: "🌍",
      titulo: "Personas cerca de ti",
      texto:
        "Descubre perfiles en tu zona para que las conexiones puedan convertirse en encuentros reales. Porque lo virtual es solo el inicio."
    },
    {
      icono: "🔒",
      titulo: "Privacidad segura",
      texto:
        "Tus datos y conversaciones están protegidos. Puedes interactuar con tranquilidad sabiendo que tu información está segura."
    }
  ];

  return (
    <section className="beneficios premium">
      <h2>Descubre una nueva forma de conectar 💘</h2>
      <p className="sub">
        Diseñado para que cada interacción tenga sentido, emoción y posibilidades reales.
      </p>

      <div className="beneficios-grid">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="beneficio-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icono">{item.icono}</div>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}