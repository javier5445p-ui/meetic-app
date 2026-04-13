export default function Footer() {
  return (
    <footer className="footer">

      {/* REDES */}
      <div className="footer-top">
        <h3>Síguenos</h3>

        <div className="redes">
          <span>📘 Facebook</span>
          <span>▶️ YouTube</span>
          <span>📸 Instagram</span>
        </div>
      </div>

      {/* LINKS */}
      <div className="footer-links">
        <span>Política de privacidad</span>
        <span>Condiciones Generales</span>
        <span>Cookies</span>
        <span>Directrices</span>
        <span>Servicios</span>
        <span>Denunciar contenido</span>
      </div>

      {/* TEXTO LEGAL */}
      <div className="footer-texto">
        <p>© 2026 Meetic | Proyecto educativo</p>

        <p>
          Más visibilidad para tu perfil: Al crear tu perfil en esta plataforma,
          este podrá ser visible dentro del sistema para mejorar la experiencia
          de conexión entre usuarios.
        </p>

        <p>
          Este proyecto es una simulación académica de una aplicación de citas.
          No representa un servicio real.
        </p>
      </div>

    </footer>
  );
}