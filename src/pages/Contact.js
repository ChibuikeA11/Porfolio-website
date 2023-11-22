import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zzr4alq', 'template_e7qo8r9', e.target, 'Ej9-vyyCyAyE88PNi')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center w-xl bg-gray-950">
      <form onSubmit={sendEmail} className="bg-gray-950 p-8 rounded w-screen">
        <div className="mb-4">
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-white" htmlFor="fullName">
                Full Name:
                <input type="text" id="fullName" name="fullName" className="border p-2 w-full rounded border-sky-700 bg-gray-900 focus:shadow-blue-700" placeholder='Full Name' required />
              </label>
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 text-white" htmlFor="email">
                Email Address:
                <input type="email" id="email" name="email" className="border p-2 w-full rounded border-sky-700 bg-gray-900" placeholder='Email Address' required />
              </label>
            </div>
          </div>
          <div className="">
            <label className="text-white block mb-2" htmlFor="message">
              Message:
              <textarea id="message" name="message" className="border w-full h-32 rounded border-sky-700 bg-gray-900" placeholder='Type Your Message Here!' required></textarea>
            </label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-3 px-4 font-bold rounded hover:bg-blue-700 items-center justify-center w-48 flex">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
