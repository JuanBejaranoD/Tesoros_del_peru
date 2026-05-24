function Hero() {
    const slides = [
        {
            id: 1,
            image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/8edd761d-4c05-4193-a734-39e510128aab.png",
            title: "Descubre una Tierra de Sabores y Leyendas",
            subtitle: "Un viaje a través de milenios de historia y una gastronomía que conquista el mundo."
        },
        {
            id: 2,
            image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/e7514e31-04bb-4ea8-bb26-24e6c8eb017f.png",
            title: "El Místico Valle Sagrado",
            subtitle: "Ruinas incas, montañas imponentes y pueblos llenos de tradición viva."
        },
        {
            id: 3,
            image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/184d2459-1975-476d-add6-ee0a3e9915b7.png",
            title: "La Ciudad de los Reyes",
            subtitle: "Explora la riqueza arquitectónica colonial y el encanto del centro histórico de Lima."
        }
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);

    // Intervalo automático para el slider
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer); // Limpieza del intervalo
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden group">
            {/* Slider Images */}
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                >
                    <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className={`w-full h-full object-cover transition-transform duration-[6000ms] ${index === currentSlide ? 'scale-105' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium tracking-widest mb-6 uppercase shadow-lg">
                                Bienvenido al Perú
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight text-shadow-lg">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
                                {slide.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="recipes.html" className="btn btn-primary">
                                    <div className="icon-chef-hat text-xl"></div>
                                    Ver Recetas
                                </a>
                                <a href="places.html" className="btn bg-white text-gray-900 hover:bg-gray-100">
                                    <div className="icon-map text-xl"></div>
                                    Ver Lugares
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slider Controls */}
            <button 
                onClick={prevSlide} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[var(--primary)] backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20"
                aria-label="Anterior"
            >
                <div className="icon-chevron-left text-2xl text-white"></div>
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[var(--primary)] backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20"
                aria-label="Siguiente"
            >
                <div className="icon-chevron-right text-2xl text-white"></div>
            </button>

            {/* Slider Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setCurrentSlide(i)}
                        className={`transition-all rounded-full ${i === currentSlide ? 'w-8 h-2 bg-[var(--primary)]' : 'w-2 h-2 bg-white/60 hover:bg-white'}`}
                        aria-label={`Ir a la diapositiva ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}