import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
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
    <div name='contact' className='w-full md:h-screen bg-slate-950 flex justify-center items-center p-4  '>
        <form onSubmit={sendEmail} className='flex flex-col max-w-[800px] w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-300 hover:border-blue-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;