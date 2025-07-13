import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-green-700 to-green-500 text-gray-300 px-6 md:px-20 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-700/10 via-green-900/20 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Cravings
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Savor every bite from the comfort of your home. Cravings brings
            handpicked flavors, local favorites, and gourmet meals to your
            doorstep — fast, fresh, and flawless.
          </p>
          <div className="flex space-x-4 mt-6 text-lg">
            <Link
              to="#"
              className="hover:text-green-400 transition-transform transform hover:-translate-y-1"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="hover:text-green-400 transition-transform transform hover:-translate-y-1"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="hover:text-green-400 transition-transform transform hover:-translate-y-1"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="hover:text-green-400 transition-transform transform hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="inline-block hover:scale-105 hover:text-green-400 transition-transform duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="inline-block hover:scale-105 hover:text-green-400 transition-transform duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-block hover:scale-105 hover:text-green-400 transition-transform duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/order"
                className="inline-block hover:text-green-400 hover:scale-105 transition-transform duration-300"
              >
                Online Ordering
              </Link>
            </li>
            <li>
              <Link
                to="/tracking"
                className="inline-block hover:text-green-400 hover:scale-105 transition-transform duration-300"
              >
                Real-Time Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="inline-block hover:text-green-400 hover:scale-105 transition-transform duration-300"
              >
                Customer Care
              </Link>
            </li>
            <li>
              <Link
                to="/catering"
                className="inline-block hover:text-green-400 hover:scale-105 transition-transform duration-300"
              >
                Corporate Catering
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Get in Touch
          </h3>
          <p className="text-sm text-gray-200 mb-4">We're here to help, 24/7</p>
          <p className="text-sm mb-1">
            📞{" "}
            <a href="tel:+918103000577" className="hover:text-white">
              +91 81030 00577
            </a>
          </p>
          <p className="text-sm">
            📧{" "}
            <a href="mailto:support@cravings.com" className="hover:text-white">
              support@cravings.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 mt-16 border-t border-green-700/30 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Cravings</span>. Built with{" "}
        <span className="text-red-400">♥</span> by{" "}
        <span className="text-green-400 font-semibold">
          Rudrapratap Singh Jat
        </span>
        .
      </div>
    </footer>
  );
};

export default Footer;
