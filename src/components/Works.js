import Card from "./Card";
import { projects } from "../api/projects";

function Works() {
  return (
    <section id="works" className="pt-24">
      <h2 className="font-bold text-2xl mb-3">Work</h2>
      <div className="bg-blue-200 grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {projects.map(({ image, title, description, url }) => {
          return (
            <Card
              key={title}
              img={image}
              title={title}
              description={description}
              url={url}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Works;
