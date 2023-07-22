import Link from 'next/link';
import React from 'react'
import {  FaFolder, FaRegFile } from 'react-icons/fa';



async function RepoDirsName(name){
    const response = await fetch(`https://api.github.com/repos/pavinane/${name}/contents`);
    const content = await response.json();
    return content
}

const RepoDirs = async ({name}) => {

    const result = await RepoDirsName(name) ;

  return (
    <div>
      <h2>Contents</h2>

      <ul>
     {
        result.map((item) => {
            return (
              <li key={item.path}>
                <Link href={`/code/repos/${name}/${item.path}`}>
                {
                    item.type === 'dir' ?     <FaFolder /> : <FaRegFile/>
                }
            <span>{item.path}</span>
                </Link>
                
                
              </li>
            );
        })
     }
      </ul>
    </div>
  );
}

export default RepoDirs