// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    // We limit items for the homepage
    const featuredRecipes = RECIPES.slice(0, 4);
    const featuredPlaces = PLACES.slice(0, 4);

    return (
      <div className="min-h-screen bg-[var(--bg-light)]" data-name="app" data-file="app.js">
        <Header />
        
        <main>
            <Hero />
            
            <FeaturedSection 
                title="Gastronomía Emblemática" 
                subtitle="Explora los sabores que han puesto al Perú en los ojos del mundo."
                items={featuredRecipes}
                type="recipe"
                linkTo="recipes.html"
            />
            
            <section className="bg-[var(--primary)] py-20 text-white text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                     <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="currentColor" />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                    </svg>
                </div>
                <div className="container mx-auto relative z-10">
                    <div className="icon-award text-5xl mx-auto mb-6 opacity-80"></div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Orgullo Mundial</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
                        Perú ha sido elegido múltiples veces como el Mejor Destino Culinario del Mundo por los World Travel Awards.
                    </p>
                </div>
            </section>

            <FeaturedSection 
                title="Destinos Inolvidables" 
                subtitle="Desde los Andes hasta la costa, lugares llenos de historia y misterio."
                items={featuredPlaces}
                type="place"
                linkTo="places.html"
            />
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);