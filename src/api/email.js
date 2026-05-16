const EMAIL_BASE = "ericgaona0413@gmail.com";

async function sendEmail({ name, email, message }) {
  const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_BASE}`, {
    method: "POST",

    // Esto es lo de la referencia
    referrer: "https://eric-gaona.com/",
    referrerPolicy: "origin-when-cross-origin",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      name,
      email,
      message,
      _subject: "New message from portfolio",
      _captcha: "false",
      _template: "table",
    }),
  });

  const data = await response.json();

  if (!response.ok || data.success === "false") {
    throw new Error(data.message || "Failed to send email");
  }

  return data;
}

export { sendEmail };