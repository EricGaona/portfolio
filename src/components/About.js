import React from "react";
import Eric from "../assets/images/Eric.jpg";

const About = () => {
  const scrollToElement = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    const element = document.querySelector(target);
    if (element) {
      const distance = element.getBoundingClientRect().top;
      window.scrollTo({
        top: distance,
        behavior: "smooth", // Hace que el desplazamiento sea suave
      });
    }
  };

  return (
    <section id="about" className="my-10">
      <h2 className="font-bold text-2xl mb-3">About</h2>
      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow p-10 gap-5">
        <div className="order-last md:order-first">
          <p className="font-normal text-black text-left mb-5 text-2xl">
            Thanks for stopping by. My name is Eric. I'm a freelance Web
            Developer from Spain. I have been living in Dublin for a few years
            now, so I am happy to work with you in both Spanish and English. I
            can help you with the planning and creation of your new website or
            even improve your old one.
          </p>
          <p className="font-normal text-black text-left text-2xl">
            I use a mixture of HTML, CSS, Bootstrap, Javascript, PHP, Python,
            Flask, Django, MongoDB, MySQL and WordPress.{" "}
            <a
              href="#footer"
              className="text-blue-600 hover:underline"
              onClick={scrollToElement}
            >
              Get in touch
            </a>{" "}
            today and we can start discussing options and ideas for your own
            digital platform.
          </p>
        </div>
        <img
          className="object-cover w-full md:h-72 lg:h-full"
          src={Eric}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
