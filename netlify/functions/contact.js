const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  const brevoAPIKey = "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"; // Replace with your actual Brevo API Key
  const brevoEndpoint = "https://api.brevo.com/v3/smtp/email";

  const emailData = {
    sender: { name: "Your Name", email: "your@email.com" }, // Update sender info
    to: [{ email: "your@email.com", name: "Your Name" }], // Your email to receive messages
    subject: "New Contact Form Submission",
    htmlContent: `<p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    const response = await fetch(brevoEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoAPIKey,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: error.message }) };
  }
};
