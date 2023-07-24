import React, { useContext, useEffect, useRef, useState } from 'react';
import Banner from '../component/banner/Banner';
import Threecards from '../component/Threecards';
import Gallery from './Gallery/Gallery';
import ResearchPaperLink from './ResearchPaperLink';
import Feddbacks from '../component/Feddbacks';
// import { CollageContext } from '../context/CollageProvider';
import useCard from '../hooks/useCard';

const Home = () => {
  // const { collages } = useContext(CollageContext);
  // const [collegeCards] = useCard();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/collages`)
      .then(response => response.json())
      .then(data => {
        console.log("zz",data);
        // Filter the toy data based on the search query
        const filteredData= data?.filter(collage => collage.college_name.toLowerCase().includes(searchQuery)
        );
        setSearchQuery(filteredData);
      
        // Sort the filtered data based on sorting order
      })
      .catch(error => console.log(`404 page not found ${error}`));
  }, [searchQuery]);
  console.log({searchQuery})
  return (
    <>
      <div className="mt-2 justify-center flex mb-3">
      <div className="relative max-w-xs border-4 rounded-md shadow-sm outline-none">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full outline-none text-xl p-3 pl-10 border-gray-200 rounded-md"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
      </div>
      <Banner></Banner>
      <Threecards></Threecards>
      <Gallery ></Gallery>
      <ResearchPaperLink></ResearchPaperLink>
      <Feddbacks></Feddbacks>
    </>
  );
};

export default Home;


// import React, { useContext, useRef, useState } from 'react';
// import Banner from '../component/banner/Banner';
// import Threecards from '../component/Threecards';
// import Gallery from './Gallery/Gallery';
// import ResearchPaperLink from './ResearchPaperLink';
// import Feddbacks from '../component/Feddbacks';
// import { CollageContext } from '../context/CollageProvider';

// const Home = () => {
//   const { collages } = useContext(CollageContext);
//   const searchRef = useRef(null);
//   const [search, setSearch] = useState('');
//   const [filteredCollages, setFilteredCollages] = useState([]);

//   const handleSearch = () => {
//     const searchTerm = searchRef.current.value.toLowerCase();
//     setSearch(searchTerm);
//     const filteredCollages = collages.filter((collage) =>
//       collage.collage_name.toLowerCase().includes(searchTerm)
//     );
//     setFilteredCollages(filteredCollages);
//   };
// console.log({filteredCollages})
//   return (
//     <>
//       <div className="mt-2 justify-center flex mb-3">
//         <div className="form-control">
//           <div className="input-group">
//             <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
//             <button onClick={handleSearch} className="btn btn-square bg-slate-500 text-white">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <Banner></Banner>
//       <Threecards collages={search ? filteredCollages : collages}></Threecards>
//       <Gallery ></Gallery>
//       <ResearchPaperLink></ResearchPaperLink>
//       <Feddbacks></Feddbacks>
//     </>
//   );
// };

// export default Home;