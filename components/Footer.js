function Footer() {
    return (
        <footer className="bg-[var(--secondary)] text-white py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-between">
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-2xl font-serif font-bold mb-4 text-[var(--primary)]">Tesoros del Perú</h3>
                        <p className="text-gray-400">
                            Descubriendo la magia de nuestra tierra, un plato y un destino a la vez.
                        </p>
                    </div>
                    <div className="flex-1 min-w-[250px]">
                        <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="index.html" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="recipes.html" className="hover:text-white transition-colors">Recetas</a></li>
                            <li><a href="places.html" className="hover:text-white transition-colors">Lugares</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[250px]">
                        <h4 className="text-lg font-bold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="https://www.youtube.com/watch?v=lLSu0UHNZhU&t=51s&pp=ygUebWFwYWNoZSBjb21pZW5kbyB1dmFzIDEwIGhvcmFz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                                <div className="icon-instagram text-white"></div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=lLSu0UHNZhU&t=51s&pp=ygUebWFwYWNoZSBjb21pZW5kbyB1dmFzIDEwIGhvcmFz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                                <div className="icon-facebook text-white"></div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=lLSu0UHNZhU&t=51s&pp=ygUebWFwYWNoZSBjb21pZW5kbyB1dmFzIDEwIGhvcmFz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                                <div className="icon-twitter text-white"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Tesoros del Perú. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}