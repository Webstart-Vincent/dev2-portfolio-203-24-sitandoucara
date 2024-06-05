"use client";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      if (result.message === "Message sent successfully") {
        setStatus("Message sent successfully!");
      } else {
        setStatus(`Failed to send message: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus(`Failed to send message: ${error.message}`);
    }
  };

  return (
    <header className="grid place-items-center py-10">
      <h1 className="text-brown text-3xl mb-8">Contactez-moi</h1>
      <div className="z-20 contact-form flex flex-col md:flex-row items-center justify-center w-full px-5 md:px-20">
        {/* Suivre */}
        <div className="text_info md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <div className="text_suiv mb-6">
            <h2 className="text-lg text-brown mb-2">Email</h2>
            <p>Si.graphs@gmail.com</p>
          </div>

          <div className="text_suiv mb-6">
            <h2 className="text-lg text-brown mb-2">Suivez-moi</h2>
            <div className="social-links flex space-x-4">
              <a
                href="https://instagram.com/si.graph?r=nametag"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-whine_transp border-2 border-double border-brown text-brown rounded-full transition-colors duration-200 hover:text-white hover:bg-brown"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://dribbble.com/sitan"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-whine_transp border-2 border-double border-brown text-brown rounded-full transition-colors duration-200 hover:text-white hover:bg-brown"
              >
                <i className="bi bi-dribbble"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sitan-doucara-28b0701b8"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-whine_transp border-2 border-double border-brown text-brown rounded-full transition-colors duration-200 hover:text-white hover:bg-brown"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="form md:w-1/2 md:pl-8 flex flex-col space-y-4"
        >
          <div className="input-group">
            <input
              type="text"
              placeholder="Nom Complet"
              className="input-control p-2 rounded-full bg-whine_transp border-2 border-double border-brown text-brown w-full"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              className="input-control p-2 rounded-full bg-whine_transp border-2 border-double border-brown text-brown w-full"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Sujet"
              className="input-control p-2 rounded-full bg-whine_transp border-2 border-double border-brown text-brown w-full"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <textarea
              placeholder="Message"
              className="input-control p-2 rounded-lg bg-whine_transp border-2 border-double border-brown text-brown w-full h-32 resize-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="submit-btn">
            <button
              aria-label="send button"
              id="theme-brown--button"
              data-tooltip-target="import-img-projet"
              type="submit"
              className="p-3 rounded-full bg-whine_transp border-2 border-double border-brown text-brown transition-colors duration-200 hover:text-white hover:bg-brown"
            >
              Envoyez un message
            </button>
          </div>
        </form>
      </div>
      {status && <p className="mt-4 text-brown">{status}</p>}
    </header>
  );
}
