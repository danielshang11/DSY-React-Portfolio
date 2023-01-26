import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>
            <i class="fab fa-html5"></i>
            HTML
          </li>
          <li>
            <i class="fa-brands fa-css3"></i>
            CSS
          </li>
          <li>
          <i class="fa-brands fa-square-js"></i>
            JavaScript
          </li>
          <li>
            <i class="fa-solid fa-clipboard-question"></i>
            jQuery
          </li>
          <li>responsive design</li>
          <li>
            <i class="fa-brands fa-react"></i>
            React
          </li>
          <li>
            <i class="fa-brands fa-bootstrap"></i>
            Bootstrap
          </li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>
            <i class="fa-brands fa-node"></i>
            Node
          </li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
