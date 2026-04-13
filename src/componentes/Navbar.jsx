export default function Navbar({ setVista }) {

  const irASeccion = (id) => {
    setVista("home"); // 🔥 vuelve al home si estás en login/registro

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // pequeño delay para asegurar render
  };

  return (
    <nav className="navbar">

      <div className="logo" onClick={() => irASeccion("inicio")}>
  <img src="/img/logo.png" alt="logo" className="logo-img" />
  <span>MEETIC</span>
</div>

      <div className="menu">
        <span onClick={() => irASeccion("inicio")}>Inicio</span>
        <span onClick={() => irASeccion("explorar")}>Explorar</span>
        <span onClick={() => irASeccion("consejos")}>Consejos</span>
        <span onClick={() => irASeccion("testimonios")}>Testimonios</span>
      </div>

      <div className="acciones">
        <button className="btn-login" onClick={() => setVista("login")}>
          Iniciar sesión
        </button>

        <button className="btn-register" onClick={() => setVista("registro")}>
          Registrarse
        </button>
      </div>

    </nav>
  );
}