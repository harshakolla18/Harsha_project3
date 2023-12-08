const Education = () => {
  return (
    <>
      <section className="max-w-screen-md mx-auto mt-10" id="skills">
        <h2 className="text-center text-3xl mb-10">Education</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Qualification
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Year of Passing{" "}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Percentage
                </th>

                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Master's in Computer Science (pursuing)
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-90">
                  2025
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    --
                  </a>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Bachelor of Technology in ECE
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  2023
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs  text-white hover:bg-indigo-700 font-bold"
                  >
                    7.8
                  </a>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Intermediate in MPC
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  2019
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs  text-white hover:bg-indigo-700 font-bold"
                  >
                    83.2 %
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-center text-3xl my-10">Skills</h2>

        <div className="overflow-x-auto text-center">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Skill Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Level
                </th>

                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Python
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <div>
                    <span id="ProgressLabel" className="sr-only">
                      Loading
                    </span>

                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow="50"
                      className="block rounded-full bg-gray-200"
                    >
                      <span
                        className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                        style={{ width: "80%" }}
                      >
                        <span className="font-bold text-white"> 80% </span>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  C
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <div>
                    <span id="ProgressLabel" className="sr-only">
                      Loading
                    </span>

                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow="50"
                      className="block rounded-full bg-gray-200"
                    >
                      <span
                        className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                        style={{ width: "70%" }}
                      >
                        <span className="font-bold text-white"> 70% </span>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Java
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <div>
                    <span id="ProgressLabel" className="sr-only">
                      Loading
                    </span>

                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow="50"
                      className="block rounded-full bg-gray-200"
                    >
                      <span
                        className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                        style={{ width: "90%" }}
                      >
                        <span className="font-bold text-white"> 90% </span>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Education;
