import { useState } from "react";
import cv from "../assets/pdf/Eric_CV.pdf";
function Header() {
  // Arriba
  // Derecha
  // Abajo
  // Izquierda
  const [isShowMenu, setIsShowMenu] = useState(false);
  // padding: 10px 5px 2px 1px
  const scrollToElement = (event) => {
    //   event.preventDefault();
    //   const target = event.target.getAttribute("href");
    //   const element = document.querySelector(target);
    //   console.log("target", target);
    //   console.log("element", element);
    //   if (element) {
    //     const distance = element.getBoundingClientRect().top;
    //     console.log("distance", distance);
    //     window.scrollTo({
    //       top: distance,
    //       behavior: "smooth", // Hace que el desplazamiento sea suave
    //     });
    //   }
    setIsShowMenu(false);
  };

  return (
    <header className="fixed px-10 py-5 bg-blue-500 w-full z-20">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">
          <a href="#hero" onClick={scrollToElement}>
            MyPortfolio
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-white rounded-lg absolute right-3 top-3 md:hidden"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <nav
          id="menu"
          className={`absolute top-16 bg-blue-500 w-full left-0  md:static md:visible md:w-auto ${
            isShowMenu ? "" : "invisible"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4">
            <li className="text-slate-300 hover:text-white font-bold">
              <a href="#about" onClick={scrollToElement}>
                About
              </a>
            </li>
            <li className="text-slate-300 hover:text-white font-bold">
              <a href="#works" onClick={scrollToElement}>
                Works
              </a>
            </li>
            <li className="text-slate-300 hover:text-white font-bold">
              <a href="#contact" onClick={scrollToElement}>
                Contact
              </a>
            </li>
            <li className="text-slate-300 hover:text-white font-bold">
              <a href={cv} target="_blank">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
