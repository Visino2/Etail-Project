import React from 'react'

const Hero = () => {

  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 md:px-20"
      style={{ backgroundImage: "url(\"/images/landing-bg.jpg\")" }}>
        <div className='flex flex-col justify-center min-h-screen'>
          <div className='max-w-xl text-left items-start'>
            <h2 className='text-6xl  w-90 font-bold text-indigo-900 leading-tight'>
            Register <span className='text-indigo-600'>your store name</span> now!
          </h2>
          <p className='text-lg w-90 md:text-xl text-gray-700 mt-4 mb-6'>
            With entail.me, anyone can earn their first dollar online. Just start with what you know. It's that easy.
          </p>
          </div>
          <div>
            <input type="text"  
            placeholder='My store...'
            className='flex-grow px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded bg-white border-7xl border-gray-300'/>
            <button className='bg-indigo-600 text-white px-6 py-3 hover:bg-indigo-700 border-7xl border-indigo-600 rounded'>
              Get Started
            </button>
          </div>
        </div>
    </div>
  )
}

export default Hero;