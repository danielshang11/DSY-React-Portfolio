import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helper';

function Project({ project }) {

  const { name, repo, link, description } = project;
  
  return (
    <div className="flex flex-col items-center rounded-lg w-full gap-2 " key={name}>
      <div className='flex flex-row md:flex-col items-center md:items-start gap-4 p-2 min-w-56 w-full  hover:bg-green-50 hover:scale-105 hover:opacity-80 ease-out transition rounded-md'>
        <img
          src={require(`../../assets/projects/${name}.jpg`).default}
          alt={removeHyphensAndCapitalize(name)}
          className="w-32 h-24 rounded-md md:w-36 md:h-36"
          />
        <div className="project-text">
          <h3>
            <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
