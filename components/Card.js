function Card({ item, type, onClick }) {
    const isRecipe = type === 'recipe';
    
    return (
        <article className="bg-white rounded-xl overflow-hidden shadow-md card-hover h-full flex flex-col" data-name="card-component">
            <div className="relative h-64 overflow-hidden group cursor-pointer" onClick={onClick}>
                <img 
                    src={item.image} 
                    alt={isRecipe ? `Receta de ${item.title}` : `Lugar histórico: ${item.title}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                    {isRecipe ? item.difficulty : item.type}
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-serif mb-2 text-gray-900 group-hover:text-[var(--primary)] transition-colors cursor-pointer" onClick={onClick}>{item.title}</h3>
                
                {isRecipe && (
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-700">
                        <div className="flex items-center gap-1">
                            <div className="icon-clock text-[var(--primary)] text-sm"></div>
                            <span className="font-medium">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="icon-utensils text-[var(--primary)] text-sm"></div>
                            <span className="font-medium">4 porciones</span>
                        </div>
                    </div>
                )}
                
                {!isRecipe && (
                     <div className="flex items-center gap-1 mb-3 text-sm text-gray-700">
                        <div className="icon-map-pin text-[var(--primary)] text-sm"></div>
                        <span className="font-medium">{item.location}</span>
                    </div>
                )}

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{item.description}</p>
                
                <button 
                    onClick={onClick}
                    className="mt-auto w-full py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors flex items-center justify-center gap-2"
                >
                    {isRecipe ? 'Ver Receta' : 'Explorar Lugar'}
                    <div className="icon-arrow-right text-base"></div>
                </button>
            </div>
        </article>
    );
}