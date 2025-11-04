import { ShieldCheck, Smartphone, Zap } from "lucide-react";

const Why = () => {
    return (
        <div className="w-full mx-auto py-20">
            <div className="py-5">
                <h2 className="text-brand-text text-center text-4xl font-bold">Why Choose <span className="text-brand-accent">NexID</span></h2>
                <p className="text-xl text-brand-text-muted text-center">Experience the future of digital identity with our cutting-edge platform</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                <div className="w-96 mx-auto px-7 py-5 border rounded-xl flex flex-col items-start hover:bg-rose-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-brand-accent p-2  my-5 rounded">
                        <ShieldCheck className="text-white" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text">Secure</h3>
                    <p className="text-brand-text-muted mt-2">Bank-level encryption keeps your identity data safe and protected at all times.</p>
                </div>
                <div className="w-96 mx-auto px-7 py-5 border rounded-xl flex flex-col items-start hover:bg-rose-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-brand-accent p-2 my-5 rounded flex justify-center">
                        <Smartphone className="text-white" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text">Portable</h3>
                    <p className="text-brand-text-muted mt-2">Access your digital ID anywhere, anytime. No need to carry physical cards.</p>
                </div>
                <div className="w-96 mx-auto px-7 py-5 border rounded-xl flex flex-col items-start hover:bg-rose-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-brand-accent rounded p-2 my-5 flex justify-center">
                        <Zap className="text-white" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text">Smart Verification</h3>
                    <p className="text-brand-text-muted mt-2">
                        QR code technology enables instant identity verification in seconds.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Why;