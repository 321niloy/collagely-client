import React from 'react';
import Banner from '../component/banner/Banner';
import Threecards from '../component/Threecards';
import Gallery from './Gallery/Gallery';
import ResearchPaperLink from './ResearchPaperLink';
import Feddbacks from '../component/Feddbacks';


const Home = () => {
    
    return (
        <>
            <div className='mt-2 justify-center flex mb-3'><div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square bg-slate-500 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>
       <Banner></Banner>  
       <Threecards></Threecards>
       <Gallery></Gallery>
       <ResearchPaperLink></ResearchPaperLink>
       <Feddbacks></Feddbacks>
        </>
    );
};

export default Home;