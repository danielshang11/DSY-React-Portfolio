import React, { useState } from 'react';
import Project from "./Project.js";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'BookHub',
      description: 'Node.js,Express.js, Handlebars, TailwindCSS',
      link: "https://book-hub.herokuapp.com/",
      repo: "https://github.com/DariusGarcia/bookhub"
    },
    {
      name: 'food-and-news',
      description: 'JavaScript, Tailwind CSS, HTML5',
      link: "https://dariusgarcia.github.io/food-and-news/",
      repo: "https://github.com/DariusGarcia/food-and-news"
    },
    {
      name: 'Work-Day-Scheduler',
      description: 'HTML/CSS/JavaScript',
      link: "https://danielshang11.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/danielshang11/Work-Day-Scheduler"
    },
    {
      name: 'Weather-Dashboard',
      description: 'HTML/CSS/JavaScript',
      link: "https://danielshang11.github.io/DSY-Weather-Dashboard/",
      repo: "https://github.com/danielshang11/DSY-Weather-Dashboard"
    },

  ]);

  return (
    <div>
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Project
            project={project}
            key={"project" + i}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
