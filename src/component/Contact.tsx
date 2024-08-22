const Contact = () => {
  return (
    <footer className="  text-white py-8" id="contact">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-center h-64">
      <h2 className="text-4xl font-semibold text-[#CFD6F6]">Contact Me</h2></div>

      {/* Email Subscription Form */}
        <div className="flex justify-center mb-8">
        <div className="bg-[#000000] p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-10 py-2 border-2 border-[#0ef] rounded-sm bg-[#000000] text-[#0ef] focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border-2 border-[#0ef] rounded-sm bg-[#000000] text-[#0ef] focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border-2 border-[#0ef] rounded-sm bg-[#000000] text-[#0ef] focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
            <button className="rounded-md border-2 border-[#0ef] bg-[#000000] px-7 py-3 font-semibold text-white transition-all hover:bg-[#0ef] hover:text-[#001845]">
              Submit
            </button>
          </div>
        </div>
      </div>



        {/* Contact, Social Links, and Quick Links Centered */}
        <div className="flex flex-col lg:flex-row justify-center items-center mb-6 space-y-6 lg:space-y-0 lg:space-x-60 ">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold mb-2">Contact</h4>
            <p>Phone: +94 72 189 9167</p>
            <p>
              Email:{" "}
              <a
                href="mailto:kashmifernando3@gmail.com"
                className="text-[#CFD6F6] hover:underline"
                >
                  daniduviraj04@gmail.com
              </a>

            </p>
            <p>Address: Bulathsinhala, Sri Lanka</p>
          </div>

          {/* Social Links */}
          <div className="lg:text-left">
            <h4 className="font-bold mb-2">Socials</h4>
            <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <a href="https://www.linkedin.com/in/danidu65/" className="flex items-center space-x-2 hover:underline">
                    <i className="fab fa-linkedin w-5 h-5 text-[#CFD6F6]"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <a href="https://github.com/Danidu65" className="flex items-center space-x-2 hover:underline">
                    <i className="fab fa-github w-5 h-5 text-[#CFD6F6]"></i>
                    <span>GitHub</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <a href="https://www.instagram.com/toxi_999" className="flex items-center space-x-2 hover:underline">
                    <i className="fab fa-instagram w-5 h-5 text-[#CFD6F6]"></i>
                    <span>Instagram</span>
                  </a>
                </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:text-left">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
            <li><a href="#home" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-[#CFD6F6]"></i><span>Home</span></a></li>
                <li><a href="#about" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-[#CFD6F6]"></i><span>About</span></a></li>
                <li><a href="#services" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-[#CFD6F6]"></i><span>Services</span></a></li>
                <li><a href="#projects" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-[#CFD6F6]"></i><span>Projects</span></a></li>
                <li><a href="#contact" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-[#CFD6F6]"></i><span>Contact</span></a></li>

            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#627189] mt-8 pt-4 flex flex-col items-center justify-center space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-36 lg:space-x-28 md:space-x-12">
          <img src="./src/assets/logo-white.png" alt='' className='w-14 h-auto hover:scale-105 transition-all'></img>
          <p className="text-[#CFD6F6]">© 2024 Danidu Viraj, All Rights Reserved!</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
