function RecipesApp() {
    const [selectedRecipe, setSelectedRecipe] = React.useState(null);

    const openRecipe = (recipe) => setSelectedRecipe(recipe);
    const closeRecipe = () => setSelectedRecipe(null);

    return (
        <div className="min-h-screen bg-[var(--bg-light)]" data-name="recipes-app" data-file="recipes-app.js">
            <Header />
            
            <main>
                <header className="pt-12 pb-12 bg-white px-4">
                    <div className="container mx-auto text-center">
                        <span className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm mb-2 block">Nuestra Cocina</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Recetas Peruanas</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Aprende a preparar los platos más representativos de nuestra gastronomía con estas recetas paso a paso.
                        </p>
                    </div>
                </header>

                <section className="container mx-auto px-4 py-12">
                    <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
                        {RECIPES.map(recipe => (
                            <div key={recipe.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex">
                                <Card 
                                    item={recipe} 
                                    type="recipe" 
                                    onClick={() => openRecipe(recipe)}
                                />
                            </div>
                        ))}
                    </div>
                
                <div className="mt-16 bg-orange-50 rounded-2xl p-8 md:p-12 text-center border border-orange-100">
                    <div className="icon-soup text-4xl text-[var(--primary)] mx-auto mb-4"></div>
                    <h2 className="text-2xl font-bold font-serif mb-4">¿Buscas algún ingrediente?</h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        La cocina peruana utiliza ingredientes únicos como el ají amarillo, el rocoto o el maíz morado. Visita nuestra guía de insumos.
                    </p>
                        <button className="btn btn-outline bg-white inline-flex">Ver Guía de Insumos</button>
                    </div>
                </section>
            </main>

            <Modal isOpen={!!selectedRecipe} onClose={closeRecipe}>
                {selectedRecipe && (
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                             <img 
                                src={selectedRecipe.image} 
                                alt={`Receta de ${selectedRecipe.title}`} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                            <div className="absolute bottom-4 left-4 text-white md:hidden">
                                <h3 className="text-2xl font-bold font-serif">{selectedRecipe.title}</h3>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 p-6 md:p-10 overflow-y-auto">
                            <h2 className="text-3xl font-bold font-serif mb-2 hidden md:block text-gray-900">{selectedRecipe.title}</h2>
                            <p className="text-gray-600 mb-6 italic">{selectedRecipe.description}</p>
                            
                            <div className="flex gap-4 mb-8 border-y border-gray-100 py-4">
                                <div className="text-center">
                                    <span className="block text-gray-600 text-xs uppercase tracking-wider">Tiempo</span>
                                    <span className="font-bold text-gray-900">{selectedRecipe.time}</span>
                                </div>
                                <div className="w-px bg-gray-300"></div>
                                <div className="text-center">
                                    <span className="block text-gray-600 text-xs uppercase tracking-wider">Dificultad</span>
                                    <span className="font-bold text-[var(--primary)]">{selectedRecipe.difficulty}</span>
                                </div>
                                <div className="w-px bg-gray-300"></div>
                                <div className="text-center">
                                    <span className="block text-gray-600 text-xs uppercase tracking-wider">Porciones</span>
                                    <span className="font-bold text-gray-900">4 pers.</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <div className="icon-shopping-basket text-[var(--primary)]"></div>
                                    Ingredientes
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    {selectedRecipe.ingredients && selectedRecipe.ingredients.map((ing, i) => (
                                        <li key={i}>{ing}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <div className="icon-chef-hat text-[var(--primary)]"></div>
                                    Preparación
                                </h4>
                                <ol className="list-decimal pl-5 space-y-4 text-gray-600">
                                    {selectedRecipe.steps && selectedRecipe.steps.map((step, i) => (
                                        <li key={i} className="pl-2">
                                            <span className="font-medium text-gray-900">Paso {i + 1}:</span> {step}
                                        </li>
                                    ))}
                                </ol>
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
root.render(<RecipesApp />);