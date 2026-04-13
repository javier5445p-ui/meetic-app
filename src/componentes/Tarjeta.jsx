export default function Tarjeta({ nombre, edad, imagen }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />

      <div className="info">
        <h2>{nombre}, {edad}</h2>
        <p>Le gusta viajar ✈️</p>
      </div>
    </div>
  );
}