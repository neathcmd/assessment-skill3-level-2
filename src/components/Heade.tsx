const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Posts", href: "#posts" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="bg-white shadow-lg text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-blue-700 font-bold hidden lg:block">
          BlogZone
        </h1>

        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-gray-900">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="px-2 py-1 hover:text-gray-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden ">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-2xl text-blue-700 font-bold">BlogZone</h1>
        </div>
        <ul className="flex items-center justify-center space-y-2 px-4 text-black">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block px-2 py-1 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
