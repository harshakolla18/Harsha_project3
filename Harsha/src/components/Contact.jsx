const Contact = () => {
  return (
    <div className=" max-w-screen-md gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
      <h2 className="text-center text-3xl mb-10">Contact Us</h2>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded outline outline-1 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded outline outline-1 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded outline outline-1 dark:bg-gray-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-violet-400 text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
