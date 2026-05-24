function PlacesApp() {
    const [selectedPlace, setSelectedPlace] = React.useState(null);

    const openPlace = (place) => setSelectedPlace(place);
    const closePlace = () => setSelectedPlace(null);

    return (
        <div className="min-h-screen bg-[var(--bg-light)]" data-name="places-app" data-file="places-app.js">
            <Header />
            
            <main>
                <header className="pt-12 pb-12 bg-white px-4">
                    <div className="container mx-auto text-center">
                        <span className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm mb-2 block">Turismo e Historia</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Lugares Históricos</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Viaja en el tiempo visitando las maravillas arqueológicas y coloniales que el Perú tiene para ofrecer.
                        </p>
                    </div>
                </header>

                <section className="container mx-auto px-4 py-12">
                    <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
                        {PLACES.map(place => (
                            <div key={place.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex">
                                <Card 
                                    item={place} 
                                    type="place" 
                                    onClick={() => openPlace(place)}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Modal isOpen={!!selectedPlace} onClose={closePlace}>
                {selectedPlace && (
                     <div className="flex flex-col h-full">
                        <div className="h-64 md:h-80 w-full relative">
                             <img 
                                src={selectedPlace.image} 
                                alt={`Lugar histórico: ${selectedPlace.title}`} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 md:p-10">
                                <div>
                                    <span className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                                        {selectedPlace.type}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">{selectedPlace.title}</h2>
                                    <div className="flex items-center text-gray-200 gap-1 text-sm">
                                        <div className="icon-map-pin text-white"></div>
                                        {selectedPlace.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 md:p-10">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Sobre este destino</h3>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {selectedPlace.details}
                            </p>

                            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-[var(--primary)]">
                                    <div className="icon-lightbulb"></div>
                                    Tips de Viajero
                                </h4>
                                <ul className="space-y-2">
                                    {selectedPlace.tips && selectedPlace.tips.map((tip, i) => (
                                        <li key={i} className="flex gap-2 text-gray-700 text-sm">
                                            <div className="icon-check text-green-500 mt-0.5 flex-shrink-0"></div>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PlacesApp />);