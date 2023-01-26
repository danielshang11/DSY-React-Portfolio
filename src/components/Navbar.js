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
          <ul className="flex flex-row md:flex-row  list-none border-b-0 pl-0 mb-4">
            {pages.map((Page) => (
              <li className={` w-full block font-medium text-center text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent ${
                  currentPage.name === Page.name && 'navActive'
                  }`}
                key={Page.name}>
                <span onClick={() => setCurrentPage(Page)}>
                  {Page.name}
                </span>
              </li>
              
            ))}
          </ul>
          
        </nav>
    );
  
}

export default Nav;