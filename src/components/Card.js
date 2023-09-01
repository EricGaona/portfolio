function Card({img, title, description}) {
    return (
        <div className="bg-white p-5 flex flex-col">
            <img src={img} title="" alt="" className="mb-5" />
            <h3 className="font-bold mb-5">{title}</h3>
            <p>{description}</p>
        </div>
    )
  }
  
  export default Card;