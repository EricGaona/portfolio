import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const EMAIL_BASE = "ericgaona0413@gmail.com";

function sendEmail({ name, email, message }) {
  return axios.post(`https://formsubmit.co/ajax/${EMAIL_BASE}`, {
    name,
    email,
    message,
  });
}

export { sendEmail };
