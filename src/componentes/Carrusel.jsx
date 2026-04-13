import { useState, useEffect } from "react";

export default function Carrusel() {
  const imagenes = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrusel-hero">
      {imagenes.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "activo" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}