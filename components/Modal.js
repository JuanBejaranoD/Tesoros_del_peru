function Modal({ isOpen, onClose, children }) {
    // Hooks must be called before any early return
    React.useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div 
                className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 animate-fade-in-up"
                role="dialog" 
                aria-modal="true"
            >
                <button 
                    onClick={onClose}
                    aria-label="Cerrar modal"
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
                >
                    <div className="icon-x text-xl text-gray-800"></div>
                </button>
                {children}
            </div>
        </div>
    );
}