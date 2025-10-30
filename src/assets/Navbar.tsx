
const Navbar = () => {
    return (
        <nav className="w-full text-center h-16 shadow-sm sticky top-0 right-0 z-50">
            <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-brand-primary text-2xl font-semibold">NexID</h1>
                <ul className="flex gap-5 text-brand-text-muted">
                    <li>Features</li>
                    <li>How It Works</li>
                    <li>About</li>
                </ul>
                <div className="flex items-center h-full gap-3">
                    <button className="px-5 py-2 text-brand-text-muted rounded hover:bg-brand-primary hover:text-white transition">Sign In</button>
                    <button className="bg-brand-primary hover:bg-brand-primary-dark text-white px-5 py-2 bg-red-500 rounded transition">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;