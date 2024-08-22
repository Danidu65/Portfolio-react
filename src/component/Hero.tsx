const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center py-60" id="home">
        {/* Left Side: Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center bg-opacity-70 p-2 w-fit lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-w-80 rounded-lg shadow-lg">
            <h1 className="text-lg sm:text-5xl my-1 text-[#0ef] mt-72" >Hello. It's Me</h1>
            <h1 className="text-3xl sm:text-9xl my-2 text-[#CFD6F6] font-semibold ">Danidu Viraj.</h1>
            <h1 className="text-[#CFD6F6] sm:text-2xl">Convert creativity to the code with passion.</h1>

            <ul className="pb-7 flex space-x-4 justify-center mt-10">
            <li className="icon-content group">
              <a href="https://www.linkedin.com/in/danidu65/" aria-label="LinkedIn" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 group-hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#001845] group-hover:text-white" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <div className="tooltip text-sm mt-1 hidden group-hover:block text-center"></div>
            </li>
            <li className="icon-content group">
              <a href="https://github.com/Danidu65" aria-label="GitHub" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 group-hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#001845] group-hover:text-white" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <div className="tooltip text-sm mt-1 hidden group-hover:block text-center"></div>
            </li>
            <li className="icon-content group">
              <a href="https://twitter.com/danidu_65" aria-label="Twitter" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 group-hover:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#001845] group-hover:text-white" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.676 6.676 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797 3.286 3.286 0 0 0-5.595 2.994A9.325 9.325 0 0 1 1.114 2.1a3.286 3.286 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.041a3.283 3.283 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.615-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045 9.344 9.344 0 0 0 5.026 1.465" />
                </svg>
              </a>
              <div className="tooltip text-sm mt-1 hidden group-hover:block text-center"></div>
            </li>
            </ul>

            <h1 className="text-[#627189] sm:text-lg text-sm  mt-24 mb-7 max-w-4xl">
              I’m a Full-stack software engineer and I like to study new things. 
              Being knowledgeable about programming or any subject is an ongoing process,
              and I’m always proactive about seeking new opportunities to develop and grow in my role.
            </h1>
            <a
            href=""
            className="rounded-md border-2 border-[#0ef] bg-[#000000] px-7 py-3 font-semibold text-white transition-all hover:bg-[#0ef] hover:text-[#001845]">
            HIRE ME
          </a>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Hero;
