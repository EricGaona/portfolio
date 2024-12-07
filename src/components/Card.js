import '../assets/css/works.css';
function Card({ img, title, description, url }) {
  return (
    <a href={url} target="_blank" className="h-full scalee">
      <div className="bg-white p-5 flex flex-col hover:bg-gray-100 hover:shadow-md h-full scalee">
        <img src={img} alt={title} className="mb-5" />
        <h3 className="font-bold mb-5">{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Card;
