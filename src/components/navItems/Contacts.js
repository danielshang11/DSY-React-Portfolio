import React, { useState } from 'react';

const validateEmail = require('email-validator');

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail.validate(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div className='mt-24 h-full login-card container'>
  
        <section className="h-screen input-wrapper">
          <div className="px-6 text-gray-800">
            <div
              className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
            >
              <div
                className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
              >
                <img
                  src="https://cdn.stocksnap.io/img-thumbs/960w/books-market_UVRPTGPNJ2.jpg"
                  className="w-full"
                  alt="Sample"
                />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form id='contact-form' className='' onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                    <div>
                      <label htmlFor="email">Email address:</label>
                      <input
                        className='auth-input-fields form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        type="email"
                        name="email"
                        placeholder="email"
                        defaultValue={email}
                        onBlur={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div>
                      <label htmlFor="name">User Name:</label>
                      <input
                        className='auth-input-fields form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        type="text"
                        name="name"
                        placeholder="username"
                        defaultValue={name}
                        onBlur={handleChange}
                      />
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <div>
                      <label htmlFor="message">Message:</label>
                      <textarea
                        className='auth-input-fields form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        name="message"
                        rows="5"
                        defaultValue={message}
                        onBlur={handleChange}
                      />
                    </div>
                  </div>
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}

                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="auth-btn inline-block px-7 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </section>
    </div>

  );
}

export default Contact;
