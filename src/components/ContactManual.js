import { useState, useEffect } from "react";
import { validName, validEmail } from "../utils/validations";
import { sendEmail } from "../api/email";
import Message from "./Message";
import ReCAPTCHA from "react-google-recaptcha";
import image from "../assets/images/image-contact.jpg";

function Contact() {
  // Formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const SITE_KEY = "6LeNcagnAAAAAKV2e6OFnPPT11RFE9kyBcVvoLlh";

  // Formulario errores
  const [errorEmail, setErrorEmail] = useState(false);

  // Estados
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // Botón
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRobot, setIsRobot] = useState(true);

  const sendForm = async (e) => {
    e.preventDefault();
    // console.log("Enviando formulario", name, email);

    if (!validEmail(email)) {
      setErrorEmail(true);
    }

    if (!errorEmail) {
      const response = await sendEmail({ name, email, message });
      console.log("Response", response);

      if (response.data.success === "true") {
        setSuccess(true);
        clearForm();
      } else {
        setError(true);
      }
    }

    // Formato de respuesta
    // {
    //   "data":{
    //     "success":"true",
    //     "message":"The form was submitted successfully."
    //  },
    // }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsDisabled(false);
  };

  // Formato de useEffect, no olvidar poner el [] vacío
  // useEffect(() => {}, []);
  useEffect(() => {
    if (name.length > 0 && email.length > 0 && message.length > 0 && !isRobot) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, message, isRobot]);

  const onChange = (token) => {
    if (token) {
      //  console.log("Todo bien");
      setIsRobot(false);
    } else {
      //  console.log("Eres un robot");
      setIsRobot(true);
    }
  };

  const containerStyle = {
    backgroundImage: `url('${image}')`,
  };

  return (
    <section id="contact" className="mt-10">
      <h2 className="font-bold text-2xl">Contact</h2>
      <div
        className={`relative flex justify-center my-10`}
        style={containerStyle}
      >
        {/* <div className="relative flex justify-center my-10 bg-[url('https://ericgaona.com/images/img03.jpg')]"> */}
        <div className="absolute w-full h-full bg-sky-400	opacity-30 z-0"></div>
        {!success && !error && (
          <div className="flex flex-col w-76 gap-3 p-20 z-10">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {errorEmail && <span>El email es inválido</span>}
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} />
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                isDisabled ? "opacity-80 cursor-not-allowed" : ""
              }`}
              onClick={sendForm}
              disabled={isDisabled}
            >
              Enviar
            </button>
          </div>
        )}

        {success && (
          <Message
            title="Mensaje enviado correctamente"
            message="Pronto tendrás una respuesta"
          />
        )}
        {error && (
          <Message title="El mensaje no envió" message="Hubo un error" />
        )}
      </div>
    </section>
  );
}
export default Contact;
