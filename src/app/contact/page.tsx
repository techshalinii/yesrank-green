import React from 'react';

const ContactUs = () => {
  return (
    <div id='ContactUs' className="relative flex flex-col items-center p-4 bg-white">
      <div className=" text-center">
        <h2 className="text-2xl sm:text-3xl  lg:text-5xl font-bold my-10 ">
          Contact
          <span>
            {" "} Us
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-24">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <section className="w-full max-w-[600px]">
            <form className='w-full p-6 bg-white shadow-lg rounded-lg'>
              <div>
                <label className="block">Full Name</label>
                <input
                  type="text"
                  className='w-full h-[50px] border  rounded-sm p-4 mt-2'
                  placeholder='Enter your name'
                  name='name'
                  required
                />
              </div>
              <div className='mt-6'>
                <label className="block">Email Address</label>
                <input
                  type="email"
                  className='w-full h-[50px] border  rounded-sm p-4 mt-2'
                  placeholder='Enter your email id'
                  name='email'
                  required
                />
              </div>
              <div className='mt-6'>
                <label className="block ">Your Message</label>
                <textarea
                  name="message"
                  className='w-full h-[100px] rounded-sm border p-4 mt-2 '
                  placeholder='Enter your message'
                  required
                ></textarea>
              </div>
              <button type='submit' className='mt-6 w-full h-[55px] bg-black text-white rounded-lg shadow-sm '>
                Send Message
                </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
