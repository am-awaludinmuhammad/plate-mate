const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            href="/"
            className="flex items-center"
          >
            <img
              src="/curry-rice-svgrepo-com.svg"
              alt="Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-rouge">Plate Mate</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
