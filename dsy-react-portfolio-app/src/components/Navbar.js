import React from "react";


function Nav (props){
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props;
   
    
      return (    
        <nav className="w-full container mx-auto flex items-center justify-around py-3">
          <a className=" items-center tracking-wide no-underline hover:no-underline hover:underline font-bold text-gray-800 text-6xl hover:opacity-70 " href="/">
           Daniel
          </a>
          <ul className="flex ">
            {pages.map((Page) => (
              <a
                className={` justify-betweentext-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md hover:text-black hover:underline ${
                  currentPage.name === Page.name && 'navActive'
                  }`}
                key={Page.name}
              >
                <span onClick={() => setCurrentPage(Page)}>
                  {Page.name}
                </span>
              </a>
              
            ))}
          </ul>
          
        </nav>
    );
  
}

export default Nav;