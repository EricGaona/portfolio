function Message({ title, message, person }) {
  return (
    <div className="m-32 p-10 bg-white rounded-lg">
      <h2 className="text-black">{title} <span className="font-bold">{person}</span></h2>
      <p className="text-black">{message}</p>
    </div>
  );
}

export default Message;
