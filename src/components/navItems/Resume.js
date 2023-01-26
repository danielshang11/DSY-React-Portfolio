import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2 item-center">
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li className='container bg-gray-200 hover:bg-blue-300'>
            <i className="fab fa-html5"></i>
            HTML
          </li>
          <li className='container bg-gray-200 hover:bg-blue-300'>
            <i className="fab fa-css3"></i>
            CSS
          </li>
          <li className='container bg-gray-200 hover:bg-blue-300'>
          <i className="fab fa-js"></i>
            JavaScript
          </li>
          <li className='container bg-gray-200 hover:bg-blue-300'>
            <i className="fab fa-jq"></i>
            jQuery
          </li>
          <li className='container bg-gray-200 hover:bg-blue-300'>responsive design</li>
          <li className='container bg-gray-200 hover:bg-blue-300'>
            <i className="fab fa-react"></i>
            React
          </li>
          <li className='container bg-gray-200 hover:bg-blue-300'>
            <i className="fab fa-bootstrap"></i>
            Bootstrap
          </li>
        </ul >
        <h3 className='text-bold'>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>
            <i className="fab fa-node"></i>
            Node
          </li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
