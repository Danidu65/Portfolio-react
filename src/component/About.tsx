
const About = () => {
  return ( 
    
    <div className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center py-60 " id="about">
            {/* Left Side: Image */}
        <div className="mt-10 flex items-center justify-center">
          <img 
              src="src/assets/img/hero-img.jpg" 
              alt="About" 
              className="w-full h-auto max-w-xs lg:max-w-sm mx-auto"
          />
        </div>
      
      {/* Right Side: Text and Social Links */}
      <div className="flex flex-col items-center lg:items-start lg:justify-start">
        <h1 className="pb-12 text-3xl font-semibold text-[#CFD6F6]">About me</h1>
        <p className="pb-7 max-w-lg text-[#627189] px-6 sm:px-6 lg:px-0">
        Hello! My name is Danidu Viraj and I enjoy creating things that live on the internet.
        As a passionate software engineering student,
        I specialize in Java and am constantly seeking opportunities to expand my knowledge and skills.
        </p>
        <p className=" pb-7 max-w-lg text-[#627189] px-6 sm:px-6 lg:px-0">
          Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
          a start-up, a huge coporation and a student-led design studio.
          My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a variety of clients.
        </p>



    <a
      href="src/assets/pdf/Danidu Viraj-SE-CV.pdf"
      download="Danidu_Viraj_SE_CV.pdf"
      className="rounded-md border-2 border-[#0ef] bg-[#000000] px-7 py-3 font-semibold text-white transition-all hover:bg-[#0ef] hover:text-[#001845]">
      GET IN TOUCH
    </a>
  </div>
</div>
</div>


  )
}

export default About