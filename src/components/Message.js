function Message({ title, message }) {
  return (
    <div className="m-32 p-10 bg-white rounded-lg">
      <h2 className="text-black font-bold">{title}</h2>
      <p className="text-black font-bold">{message}</p>
    </div>
  );
}

export default Message;
