import image from "../assets/images/img01.jpg";

function Hero() {
  const containerStyle = {
    backgroundImage: `url('${image}')`,
  };

  return (
    <div
      id="hero"
      className="h-[calc(100vh)] bg-cyan-200
     flex flex-col justify-center bg-cover bg-center"
      style={containerStyle}
    >
      <h1 className="text-white font-bold text-5xl">Eric Gaona</h1>
      <p className="text-white font-bold text-3xl">Full-Stack Web Developer</p>
    </div>
  );
}

export default Hero;
