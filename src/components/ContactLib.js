import { useState, useEffect } from "react";
import { validName, validEmail } from "../utils/validations";
import { sendEmail } from "../api/email";
import Message from "./Message";
import ReCAPTCHA from "react-google-recaptcha";
import image from "../assets/images/image-contact.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Contact() {
  // Formulario
  const SITE_KEY = "6LcKazIoAAAAAHHFrle4ETJbip5vnE91LXFFtq9G";
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Estados
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // Botón
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRobot, setIsRobot] = useState(true);

  const onChange = (token) => {
    if (token) {
      console.log("Todo bien");
      setIsRobot(false);
    } else {
      console.log("Eres un robot");
      setIsRobot(true);
    }
  };

  const containerStyle = {
    backgroundImage: `url('${image}')`,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .trim("El nombre tiene espacios")
      .strict(true),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("El mensaje es requirido"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async ({ name, email, message }) => {
    setIsLoading(true);
    const response = await sendEmail({ name, email, message });
    console.log("Response", response);

    if (response.data.success === "true") {
      setIsLoading(false);
      setName(name);
      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } else {
      setIsLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="mt-10">
      <h2 className="font-bold text-2xl">Contact</h2>
      <div
        className={`relative flex justify-center my-10 bg-blue-200`}
        style={containerStyle}
      >
        {/* <div className="relative flex justify-center my-10 bg-[url('https://ericgaona.com/images/img03.jpg')]"> */}
        <div className="absolute w-full h-full bg-sky-400	opacity-30 z-0"></div>
        {!success && !error && !isLoading && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="z-10 w-full md:max-w-md"
          >
            <div className="flex flex-col gap-3 p-10 md:p-20">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nombre"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red">{errors.name?.message}</span>
              )}
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
                {...register("email")}
              ></input>
              {errors.email && (
                <span className="text-red">{errors.email?.message}</span>
              )}
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mensaje"
                {...register("message")}
              ></textarea>
              {errors.message && (
                <span className="text-red">{errors.message?.message}</span>
              )}
              <ReCAPTCHA
                sitekey={SITE_KEY}
                onChange={onChange}
                size="invisible"
              />
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              >
                Enviar
              </button>
            </div>
          </form>
        )}
        {isLoading && (
          <div className="m-32 p-10">
            <button
              type="button"
              class="bg-white text-black font-bold p-5"
              disabled
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Processing...
            </button>
          </div>
        )}
        {success && (
          <Message
            title={`Mensaje enviado correctamente a ${name}`}
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
