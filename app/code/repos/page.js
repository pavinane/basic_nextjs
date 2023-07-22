import React from 'react';
import {FaStar,FaCodeBranch,FaEye} from 'react-icons/fa';
import Link from 'next/link';


async function getRepos () {
    const response = await fetch("https://api.github.com/users/pavinane/repos",
    {
        next:{
            revalidate:30
        }
    }
    );

    // await new Promise((resolve) => setTimeout(resolve,5000)) 

    const result = response.json();
    
    return result
}


const Repos = async() => {
    const resp = await getRepos();

  return (
    <div className='resp-container'>
        <h2>Repositories</h2>
        <ul className='repo-list'>
            {
                resp.map((item) => {
                    return(
                        <li key={item.id}>
                            <Link href= {`/code/repos/${item.name}`}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className='repo-details'>
                                    <span>
                                        <FaStar /> {item.stargazers_count}
                                    </span>
                                    <span>
                                        <FaCodeBranch /> {item.forks_count}
                                    </span>
                                    <span>
                                        <FaEye /> {item.watchers_count}
                                    </span>

                                </div>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Repos