import React from 'react'
import { FaCodeBranch, FaStar } from 'react-icons/fa';



async function RepoName(name){
    const response = await fetch(`https://api.github.com/repos/pavinane/${name}`);
    const res = await response.json();
    return res
}

const Repo = async ({name}) => {

    const result = await RepoName(name) ;


  return (
    <div>
      <h2>{result.name}</h2>
      <p>{result.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{result.stargazers_count}</span>
        </div>{" "}
        <div className="card-stat">
          <FaCodeBranch />
          <span>{result.forks_count}</span>
        </div>
      </div>
    </div>
  );
}

export default Repo