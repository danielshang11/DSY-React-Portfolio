import React from 'react';


function Project({ project }) {

  const { name, repo, link, description } = project;
  
  return (
    <div className="flex flex-col items-center rounded-lg w-full gap-2 " key={name}>
      <div className='flex flex-row md:flex-col items-center md:items-start gap-4 p-2 min-w-56 w-full  hover:bg-green-50 hover:scale-105 hover:opacity-80 ease-out transition rounded-md'>
        
        <div className="project-text">
          <h3>
            <img className=" h-24 w-48 "src={require(`../../assets/projects/${name}.jpg`)} href={link} alt={name}/>
            <a href={repo}>
              <i className="fab fa-github">{name}</i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
  
}

export default Project;
