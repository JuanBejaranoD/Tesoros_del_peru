function FeaturedSection({ title, subtitle, items, type, linkTo }) {
    
    // Helper to navigate if clicked on home page
    const handleCardClick = () => {
        window.location.href = linkTo;
    };

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{title}</h2>
                        <p className="text-gray-600 max-w-xl">{subtitle}</p>
                    </div>
                    <a href={linkTo} className="hidden md:flex items-center gap-2 text-[var(--primary)] font-bold hover:underline">
                        Ver todos
                        <div className="icon-arrow-right"></div>
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
                    {items.map(item => (
                        <div key={item.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex">
                            <Card 
                                item={item} 
                                type={type} 
                                onClick={handleCardClick} 
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <a href={linkTo} className="btn btn-outline inline-flex">
                        Ver todos
                    </a>
                </div>
            </div>
        </section>
    );
}