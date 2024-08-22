const Projects = () => {
    const projects = [
        {
          title: 'Travel App Clone',
          description: '"Developed using Reacr Native and Expo."',
          imgSrc: 'public/project-img1.png',
          link: 'https://github.com/Danidu65/travel-app-ui-react-native'
        },
        {
          title: 'Hostal Management System',
          description: '"Built with JavaFX, layered architecture and Hibernate."',
          imgSrc: 'public/project-img2.jpg',
          link: 'https://github.com/Danidu65/Hostal-Management-System'
        },
        {
          title: 'Library Management System',
          description: '"Developed using JavaFX and MVC architecture ."',
          imgSrc: 'public/project-img3.jpg',
          link: 'https://github.com/Danidu65/Library-System-Using-MVC-'
        },
        {
          title: 'Chat Application',
          description: 'The chat application, built with Java socket programming, enables real-time messaging over a network.',
          imgSrc: 'public/project-img4.jpg',
          link: 'https://github.com/Danidu65/ChatAppication'
        },
        {
          title: 'Instagram Clone App',
          description: '"Developed using Reacr Native and Expo."',
          imgSrc: 'public/project-img5.png',
          link: 'https://github.com/Danidu65/insta-clone-app'
        },
        {
          title: 'Shoe Shop System',
          description: '"Built with Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend."',
          imgSrc: 'public/project-img6.jpg',
          link: 'https://github.com/Danidu65/shoe_Shop'
        },
        {
          title: 'Police Project',
          description: '"Built with JavaFX, layered architecture and Hibernate."',
          imgSrc: 'public/project-img7.jpg',
          link: 'https://github.com/Danidu65/Project-Police'
        },
      ];
  return (
    <div className="py-16 px-8 md:px-32 " id="projects">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#CFD6F6]">Latest Projects</h2>
      </div>
      <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md group"
          >
            <div className="relative w-full h-72">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#aceef3] via-[#CFD6F6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8">
                <h3 className="text-xl font-semibold text-[#000000] mb-4">{project.title}</h3>
                <p className="text-sm mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="w-12 h-12 flex items-center justify-center outline outline-2">
                  <i className="fas fa-external-link-alt text-lg text-black"></i>Click</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
