const Footer = () => {
    return (
        // <div className="w-full py-10 bg-white">
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
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Security</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-semibold">Company</p>
                    <ul className="text-sm text-brand-text-muted space-y-1">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-semibold">Legal</p>
                    <ul className="text-sm text-brand-text-muted space-y-1">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Cookies</li>
                        <li>Licenses</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
