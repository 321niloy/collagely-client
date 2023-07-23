import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPaperLink = () => {
    return (
        <>
            <div className='mt-3 mb-2'><h1 className='text-3xl font-bold text-sky-300 text-center'>Research Papers Link</h1></div>
            <div className='mb-3'>
                <div><Link to="https://en.wikipedia.org/wiki/Harvard_University" className=" font-serif font-semibold hover:underline flex justify-center">1.  Sample University</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/Stanford_University" className=" font-serif font-semibold hover:underline flex justify-center">2.  Example College</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/University_of_Washington" className=" font-serif font-semibold hover:underline flex justify-center">3.  Sample Institute of Technology</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/University_of_California,_Los_Angeles" className=" font-serif font-semibold hover:underline flex justify-center">4.  New Horizons University</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/University_of_Oxford" className=" font-serif font-semibold hover:underline flex justify-center">5.  Innovative Arts Academy</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/Yale_University" className=" font-serif font-semibold hover:underline flex justify-center">6.  Global Business School</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/University_of_Tokyo" className=" font-serif font-semibold hover:underline flex justify-center">7.  Academic Excellence Institute</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/Pennsylvania_State_University" className=" font-serif font-semibold hover:underline flex justify-center">8.  Eco-Friendly College</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/Utrecht_University" className=" font-serif font-semibold hover:underline flex justify-center">9.  Tech Wizards University</Link></div>
                <div><Link to="https://en.wikipedia.org/wiki/University_of_Helsinki" className=" font-serif font-semibold hover:underline flex justify-center">10.  Science and Technology Institute</Link></div>
            </div>
        </>
    );
};

export default ResearchPaperLink;