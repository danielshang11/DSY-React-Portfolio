import React from 'react';
import About from './navItems/About';
import Portfolio from './navItems/Portfolio.js';
import Contact from './navItems/Contacts.js';
import Resume from './navItems/Resume.js';


const PageContent = (props) => {

    return (
      <div>
        {props.children}
      </div>
    );
  };

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section className='content h-full container mx-auto container mx-auto px-2 mt-4 md:mt-10'>
      <h2 className=''>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
