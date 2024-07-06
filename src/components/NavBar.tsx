const NavBar = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 bg-black-opacity text-white py-3 m-3 rounded-2xl z-50">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex gap-4 justify-evenly w-full max-w-screen-lg items-center">
          <li className="font-bold">Home</li>
          <li className="font-bold">Sobre mi</li>
          <li className="font-bold">Proyectos</li>
          <li className="font-bold">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
