
const Projects = () => {
  const projects = [
    {
      name: "Under water Fisherman communication",
      description: "The project involves the creation of a user-friendly mobile computing device and integrated water monitoring for environmental and emergency alert purposes.",  
      link: "https://www.ieeexpert.com/ece-projects/fishermen-tracking-and-communication-using-wireless-water-communications/",

    },
    {
      name: "Online Banking System",
      description: "Developed and implement a web application to expand the banking service online. Tools and techniques used: Git, JIRA, SQL, HTML, CSS, JS, PHP.",
      link:"https://ieeexplore.ieee.org/document/9498865",
    },
    {
      name: "IOT based accident and alcohols detection",
      description: "This project is an accident alert system that immediately broadcaststhe message after an accident. As a result, the message containing the accident's location is sent using a GPS and GSM module.",
      link:"https://ieeexplore.ieee.org/document/8822104",
    },
  ];
  return (
    <>
    
      <section className="max-w-screen-md mx-auto mb-[4.5rem]">
        <section className=" sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold mb-10">Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 ">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="flex flex-col dark:bg-gray-900 shadow-2xl p-3"
                >
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label={project.description}
                    ></a>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-first-color">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     
                    </a>
                  </div>
                    <h3
                      rel="noopener noreferrer"
                      href="#"
                      className="text-lg  tracki uppercase hover:underline dark:text-violet-400"
                    >
                      {project.name}
                    </h3>
                    <p className="flex-1 pt-2 text-xs font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label={project.description}
                  >
                    
                  </a>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-first-color">
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View More{" "}
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
