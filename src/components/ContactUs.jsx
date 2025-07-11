import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-16 bg-gradient-to-br from-neutral-100 via-zinc-100 to-neutral-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden bg-white/90 backdrop-blur-md border border-gray-200">

        {/* Left Panel */}
        <aside className="w-full md:w-1/2 bg-gradient-to-br from-green-400 to-green-600 text-white p-10 flex flex-col justify-between">
          <div className="pt-15">
            <h2 className="text-4xl font-extrabold mb-4">Let’s Talk Food</h2>
            <p className="text-lg font-medium mb-8">We’d love to hear from you. Reach out anytime.</p>

            <div className="space-y-4 text-base ">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 810300577</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>support@cravingsfood.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Apna Adda, Gwalior, MP</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pb-20">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <Icon
                key={i}
                className="w-6 h-6 hover:scale-110 hover:text-white/80 transition-transform cursor-pointer"
              />
            ))}
          </div>
        </aside>

        {/* Right Form */}
        <main className="w-full md:w-1/2 bg-white p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Send us a Message
          </h3>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-white text-white hover:text-green-600 font-bold py-3 rounded-xl border border-transparent hover:border-green-500 shadow-md transition-all duration-300"
            >
              🚀 Send Message
            </button>
          </form>
        </main>
      </div>
    </section>
  );
};

export default ContactUs;
