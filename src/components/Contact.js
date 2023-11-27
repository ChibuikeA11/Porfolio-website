import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zzr4alq', 'template_e7qo8r9', e.target, 'Ej9-vyyCyAyE88PNi')
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true); // Set state to true when the email is sent successfully
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Render confirmation page if the email is sent
  if (isEmailSent) {
    return (
      <div className='w-full md:h-screen bg-slate-950 flex justify-center items-center p-4 flex-col'>
        <div className='p-3'><FaCheckCircle size={50} color='#22c55e' /></div>
        <p className='text-4xl font-bold text-white text-center'>Thank you for submitting the form. 
        <br />We will contact you soon!</p>
      </div>
    );
  }

  // Render the contact form if the email is not sent
  return (
    <div name='contact' className='w-full md:h-screen bg-slate-950 flex justify-center items-center p-4'>
      <form onSubmit={sendEmail} className='flex flex-col max-w-[1000px] w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-300 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email </p>
        </div>
        <input className='bg-[#F5F8FA] p-2' type='user_name' placeholder='Name' name='user_name' />
        <input className='my-4 p-2 bg-[#F5F8FA]' type='email-address' placeholder='Email' name='email-address' required />
        <textarea className='bg-[#F5F8FA] p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-blue-300 hover:border-blue-300 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
