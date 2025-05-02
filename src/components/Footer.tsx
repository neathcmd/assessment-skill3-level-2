const footerLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="text-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm font-bold hidden lg:block">
            © 2025 BlogZone. All rights reserved.
          </p>

          <nav className="hidden md:block">
            <ul className="flex space-x-4 text-gray-900">
              {footerLinks.map((link) => (
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
        <div className="md:hidden">
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-bold lg:hidden ">
              © 2025 BlogZone. All rights reserved.
            </p>
          </div>
          <ul className="flex items-center justify-center space-y-2 px-4 text-black">
            {footerLinks.map((link) => (
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
      </div>
    </footer>
  );
};

export default Footer;
