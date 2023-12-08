import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/edu",
    name: "Education",
  },
  {
    route: "/exp",
    name: "Experience",
  },
  {
    route: "/projects",
    name: "Projects",
  },
  {
    route: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");
  const themeButton = useRef(null);
  const darkTheme = "dark";
  const iconTheme = "uil-sun";

  const getCurrentTheme = () =>
    document.body.parentElement.classList.contains(darkTheme)
      ? "dark"
      : "light";
  const getCurrentIcon = () =>
    themeButton.current.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

  useEffect(() => {
    if (selectedTheme) {
      document.body.parentElement.classList[
        selectedTheme === "dark" ? "add" : "remove"
      ](darkTheme);
      themeButton.current.classList[
        selectedIcon === "uil-moon" ? "add" : "remove"
      ](iconTheme);
    }
  }, []);

  const handleThemeClick = () => {
    document.body.parentElement.classList.toggle(darkTheme);
    themeButton.current.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };
  return (
    <header className="w-full  dark:text-white" id="header">
      <nav className="flex justify-between items-center py-5 px-8 max-w-screen-xl mx-auto">
        <ul className="flex justify-center space-x-6 mr-4 w-full">
          {links.map((link, i) => (
            <li
              className={`hover:text-first-color ${
                link.route == currentPath && "text-blue-600"
              }`}
              key={i}
            >
              <Link to={link.route} className="">
                {link.name}
              </Link>
            </li>
          ))}

          <li className="hover:text-first-color cursor-pointer ">
            <i
              ref={themeButton}
              className="uil uil-moon change-theme"
              onClick={handleThemeClick}
            ></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
