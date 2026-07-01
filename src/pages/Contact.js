import React, { useState } from "react";

function Contact() {

  const [showPopup,
  setShowPopup] =
    useState(false);

  const handleSubmit =
    (e) => {

      e.preventDefault();

      // show popup
      setShowPopup(true);

      // hide popup after 3 sec
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // reset form
      e.target.reset();
    };

  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>
          Contact Us 📩
        </h1>

        <p>
          Have questions or feedback?
          Send us a message.
        </p>

        <form
          className="contact-form"
          onSubmit={
            handleSubmit
          }
        >

          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <textarea
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      {/* POPUP */}

      {showPopup && (
        <div className="popup">

          ✅ Message Sent
          Successfully!

        </div>
      )}

    </div>
  );
}

export default Contact;