function Hero() {
  return (
    <div
      id="hero"
      className="h-[calc(100vh)] bg-red-200
     flex flex-col justify-center
     bg-[url('https://ericgaona.com/images/img01.jpg')]
     bg-cover bg-center
     "
    >
      <h1 className="text-white font-bold text-5xl">Eric Gaona</h1>
      <p className="text-white font-bold text-3xl">Full-Stack Web Developer</p>
    </div>
  );
}

export default Hero;
