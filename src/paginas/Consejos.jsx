import { motion } from "framer-motion";

export default function Consejos() {
  const data = [
    {
      titulo: "Sé tú mismo 😌",
      texto:
        "La autenticidad es clave para crear conexiones reales. No intentes aparentar algo que no eres, ya que las relaciones más duraderas nacen desde la sinceridad. Mostrarte tal como eres genera confianza y permite que la otra persona conecte contigo de forma genuina."
    },
    {
      titulo: "Escucha activamente 👂",
      texto:
        "Prestar atención a lo que la otra persona dice es fundamental. Haz preguntas, mantén contacto visual y demuestra interés genuino. Esto no solo mejora la comunicación, sino que también fortalece la conexión emocional desde el inicio."
    },
    {
      titulo: "Ten confianza 💪",
      texto:
        "La seguridad en ti mismo es muy atractiva. Cree en tus cualidades, exprésate con naturalidad y mantén una actitud positiva. La confianza transmite estabilidad y genera mayor interés en cualquier interacción."
    }
  ];

  return (
    <section id="consejos" className="section gray">
      <h2>Consejos para ligar 💘</h2>

      <div className="consejos-grid">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="card consejo-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}