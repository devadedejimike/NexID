import { UserPlus, QrCode, CircleCheckBig } from "lucide-react";

const How = () => {
    return (
        <div className="w-full mx-auto py-20">
            <div className="pb-10">
                <h2 className="text-brand-text text-center text-4xl font-bold">How It Works</h2>
                <p className="text-xl text-brand-text-muted text-center">Get started with NexID in three simple steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 b ">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center">
                        <span className="absolute -top-1.5 -right-1 text-white text-sm bg-brand-accent/80 flex justify-center items-center rounded-full w-6 h-6 p-2">01</span>
                        <UserPlus className="text-white" size={38}/>
                    </div>
                    <div className="w-12 h-[2px] bg-brand-accent my-4"></div>
                    <h3 className="text-2xl text-brand-text font-semibold">Create your Id</h3>
                    <p className="text-brand-text-muted mt-2">Sign up and fill in your details to generate your digital identity card.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center">
                        <span className="absolute -top-1.5 -right-1 text-white text-sm bg-brand-accent/80 flex justify-center items-center rounded-full w-6 h-6 p-2">02</span>
                        <QrCode className="text-white" size={38}/>
                    </div>
                    <div className="w-12 h-[2px] bg-brand-accent my-4"></div>
                    <h3 className="text-2xl text-brand-text font-semibold">Get QR code</h3>
                    <p className="text-brand-text-muted mt-2">Receive a unique QR code linked to your secure verification profile.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                     <div className="relative w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center">
                        <span className="absolute -top-1.5 -right-1 text-white text-sm bg-brand-accent/80 flex justify-center items-center rounded-full w-6 h-6 p-2">03</span>
                        <CircleCheckBig className="text-white" size={38}/>
                    </div>
                    <div className="w-12 h-[2px] bg-brand-accent my-4"></div>
                    <h3 className="text-2xl text-brand-text font-semibold">Verify Instantly</h3>
                    <p className="text-brand-text-muted mt-2">Anyone can scan your QR code to instantly verify your identity.</p>
                </div>
            </div>
        </div>
    );
};

export default How;