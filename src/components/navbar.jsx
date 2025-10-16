function Navbar() {
  return (
  <nav className="sticky top-0 z-50 flex justify-center">
  <ul className="flex items-center mt-3 backdrop-blur-md rounded-4xl space-x-4 px-4 py-2 border-0 text-sm text-white bg-black/30">
    <li><a href="#experience" className="hover:underline">Experiencia</a></li>
    <li><a href="#about" className="hover:underline">Sobre mí</a></li>
    <li><a href="#contact" className="hover:underline">Contacto</a></li>
  </ul>
</nav>

  );
}

export default Navbar;
