import React,{Suspense} from 'react';
import Link from 'next/link';
import Repo from '@/app/component/Repo';
import RepoDirs from '@/app/component/RepoDirs';


const CoursePage = ( { params: { name }}) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn back">
        Back To Repository
      </Link>
      <Suspense fallback={<div>Loading ....</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Content ....</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}

export default CoursePage