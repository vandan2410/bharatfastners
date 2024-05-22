import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (
      contactForm.phonenumber.length!== 10 ||
      !contactForm.email.includes("@")
    ) {
      console.log("ISUEEEEEEE========================>")
      alert("Please insert a valid email and phone number");
    } else {
      console.log(contactForm);

      emailjs
        .sendForm(
          "service_4vgd3zi",
          "template_qm3t8sw",
          formRef.current,
          "qqcRlcwBD0tM0bjFJ"
        )
        .then(
          (result) => {
            console.log(result);
            setContactForm({
              name: "",
              categoryName: "",
              description: "",
              imageUrl: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const formRef = useRef();

  return (
    <div className="w-full flex flex-col px-[100px]">
      <form ref={formRef} onSubmit={sendEmail} className="w-full flex flex-col">
        <div className="w-full flex justify-between items-center mt-7">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactForm.name}
            onChange={handleChange}
            required
            className="border-[3px] p-3 w-[400px] focus:outline-none"
          />
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactForm.phonenumber}
            onChange={handleChange}
            required
            className="border-[3px] p-3 w-[400px] focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contactForm.email}
            onChange={handleChange}
            required
            className="border-[3px] p-3 w-[400px] focus:outline-none"
          />
        </div>
        <textarea
          rows="7"
          type="text"
          name="message"
          value={contactForm.message}
          onChange={handleChange}
          placeholder="Your requirements"
          required
          className="border-[3px] mt-7 p-4 focus:outline-none"
        />
        <div className="w-full flex justify-center mt-7">
          <button type="submit" className="bg-blue-500 px-8 py-2 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
