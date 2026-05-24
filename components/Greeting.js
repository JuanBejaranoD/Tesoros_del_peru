function Greeting() {
    const [greeting, setGreeting] = React.useState('');

    React.useEffect(() => {
        // Manipulación dinámica del mensaje basada en la hora del día
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting('¡Buenos días!');
        } else if (hour < 19) {
            setGreeting('¡Buenas tardes!');
        } else {
            setGreeting('¡Buenas noches!');
        }
    }, []);

    if (!greeting) return null;

    return (
        <div className="bg-[var(--primary)] text-white text-center py-2 px-4 text-sm font-medium animate-fade-in-up">
            <span className="flex items-center justify-center gap-2">
                <div className="icon-sun text-base"></div>
                {greeting} Bienvenido a Tesoros del Perú. Disfruta de nuestro legado.
            </span>
        </div>
    );
}