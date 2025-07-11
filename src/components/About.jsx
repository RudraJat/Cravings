import { useEffect, useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const GITHUB_USERNAME = "RudraJat";

const About = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-500"></div>
      </div>
    );
  }

  if (!user || user.message === "Not Found") {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center text-gray-600">
        GitHub user not found.
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center">
        {/* Avatar */}
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-28 h-28 rounded-full mx-auto mb-6 shadow-lg ring-4 ring-green-400"
        />

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-6">
          {user.name || user.login}
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {["about", "skills", "experience"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-green-500 text-white shadow-md hover:bg-white hover:text-green-600 hover:border hover:border-green-500"
                  : "bg-gray-100 text-gray-600 hover:shadow-md"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "about" && (
          <>
            <p className="text-gray-700 text-md leading-relaxed mb-10">
              Crafting elegant, high-performance web experiences with a passion
              for design and detail. I turn ideas into seamless, user-centric
              digital solutions.
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600 max-w-xl mx-auto">
              {/* Email */}
              <a
                href="mailto:rps9827256181@gmail.com"
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-400 hover:bg-white"
              >
                <Mail className="w-5 h-5 text-green-500" />
                <span>rps9827256181@gmail.com</span>
              </a>

              {/* Phone */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-400 hover:bg-white">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+91 81030 00577</span>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/RudraJat"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-400 hover:bg-white"
              >
                <Github className="w-5 h-5 text-green-500" />
                <span>github.com/RudraJat</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rudrapratap-singh-jat"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-400 hover:bg-white"
              >
                <Linkedin className="w-5 h-5 text-green-500" />
                <span>linkedin.com/in/rudrapratap-singh-jat</span>
              </a>
            </div>
          </>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700 max-w-4xl mx-auto">
            {/* Card Template */}
            {[
              {
                title: "Frontend",
                skills: ["React", "HTML5", "CSS3", "JavaScript"],
              },
              {
                title: "Backend",
                skills: ["PHP", "SQL"],
              },
              {
                title: "Tools",
                skills: ["Git", "VS Code", "Figma"],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl hover:border-green-500 hover:ring-2 hover:ring-green-200"
              >
                <h4 className="text-lg font-bold text-center text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  {section.title}
                </h4>
                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 group-hover:text-gray-800 transition-all duration-300">
                  {section.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="hover:text-green-600 hover:translate-x-1 transition-all duration-300 ease-in-out"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {activeTab === "experience" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-green-500 hover:ring-2 hover:ring-green-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  FullStack Developer
                </h4>
                <span className="text-sm text-gray-500">2024 - Present</span>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Apni Hi Company Hai
              </p>
              <p className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300 mt-3 leading-relaxed">
                Engineered elegant, high-performance web platforms using React. Led end-to-end development of intuitive UIs and
                scalable architecture, ensuring pixel-perfect design, seamless
                user experience, and lightning-fast performance. Passionate
                about innovation, rapid iteration, and delivering impact through
                clean, modern code.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
