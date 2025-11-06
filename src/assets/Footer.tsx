import { Copyright } from "lucide-react";
const Footer = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    NexID
                    </h3>
                    <p className="text-sm text-brand-text-muted">
                    Identity Made Simple
                    </p>
                </div>
                <div>
                    <p className="text-xl font-semibold">Product</p>
                    <ul className="text-sm text-brand-text-muted space-y-1">
                        <li className="hover:text-brand-accent cursor-pointer">Features</li>
                        <li className="hover:text-brand-accent cursor-pointer">Pricing</li>
                        <li className="hover:text-brand-accent cursor-pointer">Security</li>
                        <li className="hover:text-brand-accent cursor-pointer">FAQ</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-semibold">Company</p>
                    <ul className="text-sm text-brand-text-muted space-y-1">
                        <li className="hover:text-brand-accent cursor-pointer">About</li>
                        <li className="hover:text-brand-accent cursor-pointer">Blog</li>
                        <li className="hover:text-brand-accent cursor-pointer">Careers</li>
                        <li className="hover:text-brand-accent cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-semibold">Legal</p>
                    <ul className="text-sm text-brand-text-muted space-y-1">
                        <li className="hover:text-brand-accent cursor-pointer">Privacy</li>
                        <li className="hover:text-brand-accent cursor-pointer">Terms</li>
                        <li className="hover:text-brand-accent cursor-pointer">Cookies</li>
                        <li className="hover:text-brand-accent cursor-pointer">Licenses</li>
                    </ul>
                </div>
            </div>
            <div className="w-full border-t mb-0 flex justify-between items-center text-sm text-brand-text-muted py-4">
                <p className="flex items-center gap-2">
                    <Copyright className="w-4 h-4"/>
                    <span>2025 NexID. All rights reserved.</span>
                </p>
                <ul className="flex gap-8 ">
                    <li className="hover:text-brand-accent cursor-pointer">Twitter</li>
                    <li className="hover:text-brand-accent cursor-pointer">LinkedIn</li>
                    <li className="hover:text-brand-accent cursor-pointer">GitHub</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
