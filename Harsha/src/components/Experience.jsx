import SiliconImg from "../assets/silicon_india.jpeg";

const Experience = () => {
  return (
    <>
      <section className="max-w-screen-md mx-auto mt-10 mb-[4.5rem]">
        <section className="py-6 sm:py-12  dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold mb-10">Internship</h2>
            </div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-md mx-auto">
              <img
                alt="Office"
                src={SiliconImg}
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  March 2023-May 2023
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    Silicon India Limited (Intern)
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  • Completed traning in basics of web programming and worked on
                  a minor and major project.
                  <br />• Built a trail website for the magzine company
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default Experience;
