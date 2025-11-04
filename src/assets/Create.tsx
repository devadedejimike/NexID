import { ArrowRight } from "lucide-react";

const Create = () => {
  return (
    <div className="mx-auto min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-rose-200 to-white">
      <div>
        <h3 className="text-5xl font-bold text-brand-text max-w-3xl mx-auto">
          Ready to Transform Your <span className="text-brand-accent">Identity Experience?</span>
        </h3>
        <p className="text-xl text-brand-text-muted pt-5 pb-10 max-w-2xl mx-auto">
          Join thousands of users who trust NexID for secure, portable digital identity verification.
        </p>

        <button className="flex items-center mx-auto bg-brand-primary hover:bg-brand-primary-dark hover:scale-105 transition-transform duration-200 text-white text-sm px-8 py-3 rounded-xl shadow-md">
          Create your NexID
          <ArrowRight className="w-5 h-5 ml-3" />
        </button>

        <ul className="flex justify-center items-center gap-20 py-10 list-disc marker:text-brand-accent text-brand-text-muted">
          <li>Trusted by 10k+ users</li>
          <li>Bank-level security</li>
          <li>Instant verification</li>
        </ul>
      </div>
    </div>
  );
};

export default Create;
