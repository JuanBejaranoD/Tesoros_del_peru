function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const currentPath = window.location.pathname;

    return (
        <div className="sticky top-0 z-50 w-full shadow-sm">
            <Greeting />
            <header className="bg-white/90 backdrop-blur-md w-full">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="index.html" className="text-2xl font-bold font-serif text-[var(--primary)] flex items-center gap-2">
                        <div className="icon-mountain-snow text-3xl"></div>
                        Tesoros del Perú
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        <a 
                            href="index.html"
                            className={`font-medium hover:text-[var(--primary)] transition-colors ${currentPath.includes('index.html') || currentPath === '/' ? 'text-[var(--primary)]' : 'text-gray-600'}`}
                        >
                            Inicio
                        </a>
                        <a 
                            href="recipes.html"
                            className={`font-medium hover:text-[var(--primary)] transition-colors ${currentPath.includes('recipes.html') ? 'text-[var(--primary)]' : 'text-gray-600'}`}
                        >
                            Recetas
                        </a>
                        
                        {/* Dropdown Menu (mouseover/mouseout implementation) */}
                        <div 
                            className="relative py-2"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <a 
                                href="places.html"
                                className={`font-medium flex items-center gap-1 hover:text-[var(--primary)] transition-colors ${currentPath.includes('places.html') ? 'text-[var(--primary)]' : 'text-gray-600'}`}
                            >
                                Lugares
                                <div className={`icon-chevron-down text-sm transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}></div>
                            </a>

                            {/* Dropdown Content */}
                            <div 
                                className={`absolute top-full left-0 mt-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${dropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
                            >
                                <a href="places.html" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[var(--primary)] transition-colors border-b border-gray-50">Machu Picchu</a>
                                <a href="places.html" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[var(--primary)] transition-colors border-b border-gray-50">Valle Sagrado</a>
                                <a href="places.html" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[var(--primary)] transition-colors">Líneas de Nazca</a>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-gray-700">
                        <div className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-lg">
                        <nav className="flex flex-col gap-4">
                            <a href="index.html" className="text-gray-600 hover:text-[var(--primary)] font-medium py-2">Inicio</a>
                            <a href="recipes.html" className="text-gray-600 hover:text-[var(--primary)] font-medium py-2">Recetas</a>
                            <a href="places.html" className="text-gray-600 hover:text-[var(--primary)] font-medium py-2">Lugares</a>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
}