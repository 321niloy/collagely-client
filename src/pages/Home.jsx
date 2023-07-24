import React, { useContext, useEffect, useRef, useState } from 'react';
import Banner from '../component/banner/Banner';
import Threecards from '../component/Threecards';
import Gallery from './Gallery/Gallery';
import ResearchPaperLink from './ResearchPaperLink';
import Feddbacks from '../component/Feddbacks';
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Threecards></Threecards>
      <Gallery ></Gallery>
      <ResearchPaperLink></ResearchPaperLink>
      <Feddbacks></Feddbacks>
    </>
  );
};

export default Home;