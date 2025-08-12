import React from "react";

export const Contact= () => {
  return (
    <div className='bg-gray-50 min-h-screen flex justify-center items-center px-4 '>
      <div className='bg-white rounded-4xl shadow-lg w-full max-w-6xl lg:flex '>
      
        <div className='w-full lg:w-1/3 bg-white p-8 space-y-8'>
          <div>
            <span  className="flex gap-2">
              <img src="svg1.svg" alt=""  className="w-6 h-6"/>
              <h3 className='text-lg font-bold mb-2'>Chat to us</h3>
            </span>
            <p className='text-gray-600'>our friendly team is here to help.</p>
            <p className='text-gray-800'>victor@gmail.com</p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2'>Visit us</h3>
            <p className='text-gray-600'>Come say hello at our office HQ.</p>
            <p className='text-gray-800 font-medium mt-1'>
              100 Smith Street <br />
              Collingwood VIC 3066
            </p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2'>Call us</h3>
            <p className='text-gray-600'>Mon-Fri from 8am to 5pm.</p>
            <p className='text-gray-800 font-medium mt-1'>+1 (555) 000-0000</p>
          </div>
          <div className='flex space-x-3 pt-4'>
            <a href="#" className='p-2 bg-gray-100 rounded-md'><i className='fa fa-facebook'></i></a>
            <a href="#" className='p-2 bg-gray-100 rounded-md'><i className='fa fa-twitter'></i></a>
            <a href="#" className='p-2 bg-gray-100 rounded-md'><i className='fa fa-linkedin'></i></a>
            <a href="#" className='p-2 bg-gray-100 rounded-md'><i className='fa fa-youtube'></i></a>
          </div>
        </div>
  
        <div className='w-full lg:w-2/3 p-8 bg-lime-300 flex flex-col justify-center'>
          <h2 className='text-3xl font-bold mb-2 w-85'>
            Got ideas? we've got the skills. let's team up.
          </h2>
          <p className='text-gray-800 mb-6'>
            Tell us more about yourself and what you've got in mind.
          </p>
          <form className='space-y-4'>
            <input type="text" placeholder='Your name' className='border-b border-gray-800 bg-transparent focus:outline-none pb-2 p-2 w-full' />
            <input type="email" placeholder='You@company.com' className='border-b border-gray-800 bg-transparent focus:outline-none pb-2 p-2 w-full' />
            <textarea placeholder='Tell us a little about the project...' className='border-b border-gray-800 bg-transparent focus:outline-none pb-2 p-2 w-full'></textarea>
            <div className='grid grid-cols-2 gap-2 text-gray-800'>
              <label className='flex items-center space-x-2'>
                <input type="checkbox" className='mr-2' />
                <span>website design</span>
              </label>
              <label className='flex items-center space-x-2'>
                <input type="checkbox" className='mr-2' />
                <span>Content creation</span>
              </label>
              <label className='flex items-center space-x-2'>
                <input type="checkbox" className='mr-2' />
                <span>Ux design</span>
              </label>
              <label className='flex items-center space-x-2'>
                <input type="checkbox" className='mr-2' />
                <span>Strategy & Consulting</span>
              </label>
              <label className='flex items-center space-x-2'>
                <input type="checkbox" className='mr-2' />
                <span>User research</span>
              </label>
              <label className='flex items-center space-x-2'>
                <input type="checkbox" className='mr-2' />
                <span>Other</span>
              </label>
            </div>
            <button type="submit" className='bg-gray-900 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800'>Let's get started!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;