import { QRCodeCanvas } from "qrcode.react";

interface CardProps {
    name?: string;
    idnumber?: string;
    role?: string;
    organisation?: string;
    profileURL?: string;
}

const ProfileCard = ({
    name = "John Doe",
    idnumber = "COM-5311-22-SWD",
    role = "Student",
    organisation = "University of Technology, Kalakuta",
    profileURL = "https://nexid.app/verify/sample-id",
}: CardProps) => {
    return (
        <div className="w-full py-12">
            <div className="text-center space-y-2 mb-8">
                <h2 className="text-3xl font-bold text-brand-text">Your Digital Identity Card</h2>
                <p className="text-brand-text-muted text-lg">
                    A sleek, secure digital ID with everything you need for instant verification.
                </p>
            </div>

            <div className="mx-auto max-w-sm rounded-xl overflow-hidden shadow-xl border bg-white">
                <div className="h-32 bg-brand-accent px-6 flex items-center justify-between text-white relative">
                    <div>
                        <h3 className="text-2xl font-bold">NexID</h3>
                        <p className="text-sm opacity-90">Digital Identity</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/50"></div>
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <p className="text-sm text-brand-text-muted">Name</p>
                        <h2 className="text-xl font-semibold text-brand-text">{name}</h2>
                    </div>

                    <div className="flex justify-between gap-6">
                        <div>
                            <p className="text-sm text-brand-text-muted">ID Number</p>
                            <p className="text-brand-text text-sm">{idnumber}</p>
                        </div>

                        <div>
                            <p className="text-sm text-brand-text-muted">Role</p>
                            <p className="text-brand-text text-sm font-medium">{role}</p>
                        </div>
                    </div>

                    <div className="border-b pb-5">
                        <p className="text-sm text-brand-text-muted">Organisation</p>
                        <p className="text-brand-text text-sm">{organisation}</p>
                    </div>

                    <div className="flex justify-center pt-4">
                        <QRCodeCanvas 
                            value={profileURL}
                            size={110}
                            bgColor="#ffffff"
                            fgColor="#000000"
                        />
                    </div>
                    <p className="text-sm text-center text-brand-text">Scan to verify identity</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
