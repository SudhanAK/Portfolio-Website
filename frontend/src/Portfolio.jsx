import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  function Fetch(e) {
    e.preventDefault();
    console.log(name);
    console.log(mail);
    console.log(message);
    fetch("https://portfolio-website-s8q5.onrender.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mail, message })
    })
      .then((response) => response.json())
      .then((data) => alert("Message Sent!!"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden">
      {/* HEADER */}
      <header className="grid grid-cols-3 items-center px-8 py-4 sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-bold">
          <span className="text-pink-500">SuDha</span>N.
        </h1>
        <nav className="hidden md:grid grid-cols-4 gap-6 justify-center">
          {['Home', 'About', 'Project', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="hover:text-pink-500 font-semibold text-center"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex justify-end">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kesavansudhan657@gmail.com&su=Let's%20Connect&body=Hi%20Sudhan,"
            target="_blank"
            className="invisible sm:visible bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-2 rounded-full "
          >
            Connect with me
          </a>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="grid place-items-center text-center py-20">
        <img
          src="me.png"
          alt="Profile"
          className="rounded-full w-48 h-48 mb-6 border-4 border-gray-700"
        />
        <h2 className="text-3xl md:text-5xl font-bold">
          I'm <span className="text-pink-500">Sudhan</span>{" "}
          <span className="text-orange-400">AK</span>, full-stack developer.
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          I am a mern-stack developer passionate about building clean and
          user-friendly websites. I am currently learning and working on personal
          projects to grow my skills and start my career in web development.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kesavansudhan657@gmail.com&su=Let's%20Connect&body=Hi%20Sudhan,"
            target="_blank"
            className="bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-2 rounded-full"
          >
            Connect with me
          </a>

          <a
            className="text-white border border-white px-6 py-2 rounded-full"
            href="/SudhanAK.pdf"
            download
          >
            My Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 sm:px-8 bg-black">
        <h3 className="text-4xl font-bold mb-10 text-center">About</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <div>
            <p className="font-bold text-lg py-2">WHO AM I</p>
            <p className="italic text-gray-300">
              I am a MERN-stack developer who loves making simple and user-friendly
              websites. I am learning new skills and working on projects to start my
              career in web development.
            </p>
            <br />
            <p className="font-bold text-lg py-2">EDUCATION</p>
            <p className="font-semibold text-gray-300">
              📖B.E. Computer Science and Engineering — Mepco Schlenk Engg. College
              (2021 - 2025) | CGPA: 6.51
            </p>
            <p className="font-semibold text-gray-300 mt-2">
              📖HSC — Vivekananda Vidyalaya, Kodaikanal (2019 - 2021) | 80.5%
            </p>
            <p className="font-semibold text-gray-300 mt-2">
              📖SSLC — S.E.V. School, Madurai (2017 - 2018) | 70.4%
            </p>
            <br />
            <p className="font-bold text-lg py-2">COURSES</p>
            <p className="font-semibold text-gray-300">
              • AWS Cloud Practitioner (2024)
            </p>
            <p className="font-semibold text-gray-300 mt-2">
              • Python, DBMS, Software Engineering — Infosys Springboard (2023)
            </p>
            <p className="font-semibold text-gray-300 mt-2">
              • Basic Python Bootcamp — Udemy (2019)
            </p>
          </div>

          <div>
            <div className="space-y-4">
              <p className="font-bold text-lg">SKILLS</p>

              <div>
                <p>HTML & CSS</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <p>JavaScript</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <p>React JS</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div>
                <p>Node JS</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div>
                <p>Express JS</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div>
                <p>MongoDB</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>

            <br />
            <p className="font-bold text-lg py-2">CERTIFICATES</p>
            <p className="font-semibold text-gray-300">
              🧾MERN-Stack Web Development | Notasco Technologies (2025)
            </p>
            <p className="font-semibold text-gray-300 mt-2">
              🧾AWS Cloud Practitioner (2024)
            </p>
            <p className="font-semibold text-gray-300 mt-2">
              🧾Infosys Springboard: Python, DBMS, Software Engineering (2023)
            </p>
            <p className="font-semibold text-gray-300 mt-2">
              🧾Capacity Building Program: Networks & Troubleshooting (2023)
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="project" className="py-20 px-8">
        <h3 className="text-4xl font-bold mb-10 text-center">
          My latest <span className="text-pink-500">work</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Hospital Management */}
          <div className="h-auto bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition duration-500 ease-in-out">
            <img src="hospi.png" alt="Hospital Management" className="w-full h-[200px] rounded-lg" />
            <p className="text-xl font-semibold py-4 text-center">Hospital Management System</p>
            <p className="text-gray-300 text-center ml-2">
              A software to manage hospital operations, patients, doctors, and staff efficiently and securely.
            </p>
            <p className="text-center mt-2 text-white font-semibold">Front End</p>
            <div className="grid grid-flow-col">
              <p className="ml-12 mt-2 px-2 py-2 bg-blue-200 text-black font-semibold w-[125px] rounded-3xl text-center">
                React JS + Vite
              </p>
              <p className="mt-2 ml-[-10px] px-2 py-2 bg-blue-200 text-black font-semibold w-[120px] rounded-3xl text-center">
                Tailwind CSS
              </p>
            </div>
            <p className="text-center mt-2 font-semibold">Back End</p>
            <div className="grid grid-flow-col">
              <p className="ml-12 mt-2 px-2 py-2 bg-blue-200 text-black font-semibold w-[125px] rounded-3xl text-center">
                Express JS
              </p>
              <p className="ml-[-10px] mt-2 px-2 py-2 bg-blue-200 text-black font-semibold w-[125px] rounded-3xl text-center">
                Mongo DB
              </p>
            </div>
            <div className="flex gap-4 justify-center mt-12">
              <a
                href="https://github.com/SudhanAK/Hospital-Management-System"
                target="_blank"
                className="flex items-center gap-2 text-black font-bold bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg text-xl hover:scale-105 transition-transform"
              >
                <img className="w-6 h-6" src="github (1).png" alt="GitHub" /> Code
              </a>
              <a
                href="https://sudhanak.github.io/Hospital-Management-System/#/"
                target="_blank"
                className="flex items-center gap-2 text-black font-bold bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg text-xl hover:scale-105 transition-transform"
              >
                <img className="w-6 h-6" src="monitor.png" alt="Live Demo" /> Demo
              </a>
            </div>
            <br />
          </div>

          {/* E-Commerce */}
          <div className="h-auto bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition duration-500 ease-in-out">
            <img src="ecommerce.jpeg" alt="E-Commerce Website" className="w-full h-[200px] rounded-lg" />
            <p className="text-xl font-semibold py-4 text-center">E-Commerce Website</p>
            <p className="text-gray-300 text-center ml-2">
              An online store offering a wide range of quality products at the best prices, delivered to your door.
            </p>
            <p className="text-center mt-2 text-white font-semibold">Front End</p>
            <div className="grid grid-flow-col">
              <p className="ml-12 mt-2 px-2 py-2 bg-orange-200 text-black font-semibold w-[125px] rounded-3xl text-center">
                React JS
              </p>
              <p className="mt-2 ml-[-10px] px-2 py-2 bg-orange-200 text-black font-semibold w-[120px] rounded-3xl text-center">
                CSS
              </p>
            </div>
            <p className="text-center mt-2 font-semibold">Back End</p>
            <div className="grid grid-flow-col">
              <p className="ml-12 mt-2 px-2 py-2 bg-orange-200 text-black font-semibold w-[125px] rounded-3xl text-center">
                Rapid API
              </p>
            </div>
            <div className="flex gap-4 justify-center mt-12">
              <a
                href="https://github.com/SudhanAK/Ecommerce-Application"
                target="_blank"
                className="flex items-center gap-2 text-black font-bold bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg text-xl hover:scale-105 transition-transform"
              >
                <img className="w-6 h-6" src="github (1).png" alt="GitHub" /> Code
              </a>
              <a
                href="https://sudhanak.github.io/Ecommerce-Application/#/"
                target="_blank"
                className="flex items-center gap-2 text-black font-bold bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg text-xl hover:scale-105 transition-transform"
              >
                <img className="w-6 h-6" src="monitor.png" alt="Live Demo" /> Demo
              </a>
            </div>
            <br />
          </div>

          {/* E-Learning */}
          <div className="h-auto bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition duration-500 ease-in-out">
            <img src="elearning.png" alt="E-Learning Platform" className="w-full h-[200px] rounded-lg" />
            <p className="text-xl font-semibold py-4 text-center">E-Learning Platform</p>
            <p className="text-gray-300 text-center ml-2">
              An e-learning platform with interactive courses, user-friendly design, and seamless content access for students.
            </p>
            <br />
            <p className="text-center mt-8 text-white font-semibold">Front End</p>
            <div className="grid grid-flow-col">
              <p className="ml-12 mt-2 px-2 py-2 bg-blue-400 text-black font-semibold w-[125px] rounded-3xl text-center">
                HTML
              </p>
              <p className="mt-2 ml-[-10px] px-2 py-2 bg-blue-400 text-black font-semibold w-[120px] rounded-3xl text-center">
                CSS
              </p>
            </div>
            <div className="flex gap-4 justify-center mt-12">
              <a
                href="https://github.com/SudhanAK/E-Learning-Platform"
                target="_blank"
                className="flex items-center gap-2 text-black font-bold bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg text-xl hover:scale-105 transition-transform"
              >
                <img className="w-6 h-6" src="github (1).png" alt="GitHub" /> Code
              </a>
              <a
                href="https://sudhanak.github.io/E-Learning-Platform/"
                target="_blank"
                className="flex items-center gap-2 text-black font-bold bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg text-xl hover:scale-105 transition-transform"
              >
                <img className="w-6 h-6" src="monitor.png" alt="Live Demo" /> Demo
              </a>
            </div>
            <br />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-8 bg-black">
        <h3 className="text-4xl font-bold mb-10 text-center">
          Get in <span className="text-pink-500">touch</span>
        </h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h4 className="text-orange-400 text-xl font-bold">Let's talk</h4>
            <p className="text-gray-300">
              I’m open to full-time opportunities, internships, and freelance
              projects. Feel free to get in touch!
            </p>
            <p>Email: kesavansudhan657@gmail.com</p>
            <p>Phone: +91 9159975444</p>
            <p>Location: Madurai, Tamil Nadu</p>
          </div>
          <form className="space-y-4" onSubmit={Fetch}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              required
            />

            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-2 rounded-full w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

       <footer className="bg-black text-gray-400 text-center py-8 mt-20 border-t border-gray-800">
        <h3 className="text-2xl font-bold text-white mb-2">
          Let’s Create Something Great
        </h3>
        <p className="mb-4">
          Excited to start my journey as a developer and contribute to impactful
          projects. If you’re looking for a passionate fresher with strong skills,
          let’s work together!
        </p>
        <p className="text-sm mb-1">
          Crafted with ❤️ using{" "}
          <span className="text-pink-500 font-semibold">React.js</span> &{" "}
          <span className="text-orange-400 font-semibold">Tailwind CSS</span>
        </p>
        <p className="text-sm">
          © 2025 <span className="text-white font-semibold">Sudhan AK</span>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
