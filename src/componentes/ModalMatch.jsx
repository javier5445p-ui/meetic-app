export default function ModalMatch({ cerrar }) {
  return (
    <div className="match-overlay">
      <h2>¡Es un Match! ❤️</h2>
      <button className="btn" onClick={cerrar}>
        Seguir
      </button>
    </div>
  );
}