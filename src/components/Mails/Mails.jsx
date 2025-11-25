import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const Mails = () => {
  const form = useRef();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const formAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 26 }
  });

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_9i0pszk",
        "template_7dz35xq",
        form.current,
        "lW-dZ5KS85HLfQxpL"
      )
      .then(
        (result) => {
        Toastify({
            text: "Your email was sent!",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();

        },
        (error) => {
            Toastify({
                text: "An error has ocurred",
                className: "info",
                style: {
                  background: "linear-gradient(to right,  #e50914, #420000)",
                }
              }).showToast();

        }
      );
   

  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", position: "relative" }}>
      <div className="custom-shape-divider-top-1659926912 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="pt-5 mt-5">
        <h1 className="text-center pt-5 mt-5 display-3" style={{fontWeight: "800", color: "#000000", letterSpacing: "3px", textTransform: "uppercase"}}>Contact</h1>
        <div className="contact-form-wrapper d-flex justify-content-center pt-5" ref={ref}>
          <animated.form style={formAnimation} ref={form} onSubmit={sendEmail} className="contact-form pt-5">
            <h5 className="title">Email Form</h5>
            <p className="description">
              Feel free to contact me!!
            </p>
            <label>Name</label>
            <input
              type="text"
              className="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="Name"
              required
              name="from_name"
            />
            <label>Your Email</label>
            <input
              type="email"
              className="form-control rounded border-white mb-3 form-input"
              placeholder="Email"
              required
              name="reply_to"
            />
            <label>Message</label>
            <textarea
              id="message"
              className="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
              required
              name="message"
            />
            <div className="submit-button-wrapper">
              <input type="submit" className="submitContact" value="Send" />
            </div>
          </animated.form>
        </div>
      </div>
    </div>
  );
};
