import React from 'react';

function Header(props) {

  return (
    
    <header className="flex flex-wrap items-center w-full z-30 px-2 md:px-0 top-0">
      {/* <div className="order-1 md:order-2" href="/"> */}
        
        {/* </div> */}
      {props.children}
    </header>
  );
}

export default Header;
