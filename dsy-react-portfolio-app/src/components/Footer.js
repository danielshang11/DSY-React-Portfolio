import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github ",
      link: "https://github.com/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]

  return (
    <footer className="pt-8 pb-6 relative">
        {/* <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20">
          
        </div> */}
        <div className="container mx-auto px-4 fixed bottom-0 left-0 right-0">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find Me on any of these platforms, will respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                {icons.map(icon =>(
                  <button className='bg-white text-lightBlue-600 hover:text-pink-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  key={icon.name} target="_blank" >
                    <a href={icon.link} rel="noopener noreferrer">
                      <i className={icon.name}></i>
                    </a>
                  </button>
                    )
                )}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-Gray-500 text-sm font-semibold mb-2">
                    Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        My Soptify
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/danielshang11"
                      >
                        Github
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Daniel Portfolio by{" "}
                <a
                  href="https://github.com/danielshang11"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Daniel the neo
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
