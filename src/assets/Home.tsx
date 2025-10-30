import HeroImage from '../img/cardImg.png'

const Home = () => {
    return (
        <div className="relative overflow-hidden bg-brand-bg">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left side */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl ">Identity Made{" "} 
                                <span className="text-brand-accent bg-clip-text text-transparent">Simple</span>
                            </h1>
                            <p className="text-brand-text-muted text-lg md:text max-w-2xl mx-auto lg:mx-0">
                                Secure ID Cards for students, professionals, staffs and business owners.
                                Create, store, and verify identities instantly using QR-based authentication.
                            </p>
                            <div className="flex flex-cols sm:flex-row justify-center lg:justify-start gap-4">
                                <button className="bg-brand-primary hover:bg-brand-primary-dark hover:translate-x-1 transition-transform duration-200 text-white px-6 py-2 rounded">Create your NexID</button>
                                <button className="bg-transparent hover:bg-brand-primary-dark text-brand-text hover:border-none hover:text-white border border-brand-text-muted px-6 py-2 rounded">Learn More</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                            <div>
                                <div className="font-bold text-brand-accent text-2xl bg-clip-text text-transparent ">10k+</div>
                                <div className="text-sm text-brand-text-muted mt-1">Active Users</div>
                            </div>
                            <div>
                                <div className="font-bold text-brand-accent text-2xl bg-clip-text text-transparent ">99.9%</div>
                                <div className="text-sm text-brand-text-muted mt-1">Uptime</div>
                            </div>
                            <div>
                                <div className="font-bold text-brand-accent text-2xl bg-clip-text text-transparent ">{"<1s"}</div>
                                <div className="text-sm text-brand-text-muted mt-1">Active Users</div>
                            </div>
                        </div>
                    </div>
                    {/* right side of page */}
                    <div className="relative flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
                            <img src={HeroImage} alt="Hero Image" className="relative rounded-2xl shadow-2xl transtion-all duration-500 hover:shadow-glow hover:scale-105"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;