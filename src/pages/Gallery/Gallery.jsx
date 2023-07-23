import React from 'react';
import './gallery.css'
import LazyLoad from 'react-lazyload';
 
import g1 from '../../../public/Image/GalleryCollage/one.jpg'
import g2 from '../../../public/Image/GalleryCollage/two.avif'
import g3 from '../../../public/Image/GalleryCollage/three.jpg'
import g4 from '../../../public/Image/GalleryCollage/four.jpg'
import g5 from '../../../public/Image/GalleryCollage/five.jpg'
import g6 from '../../../public/Image/GalleryCollage/six.jpg'
import g7 from '../../../public/Image/GalleryCollage/seven.jpg'
import g8 from '../../../public/Image/GalleryCollage/eight.jpg'
import g9 from '../../../public/Image/GalleryCollage/NINE.webp'
import g10 from '../../../public/Image/GalleryCollage/TEN.jpg'



const Gallery = () => {
    return (
        <>
        <div class="container" >
           <div class="heading" >
             <h3><span >Gallery</span></h3>
           </div>
           <div class="box">
             
             <div class="dream" 
             >
                <LazyLoad><img src={g1} /></LazyLoad>
                <LazyLoad> <img src={g2} /></LazyLoad>
                <LazyLoad> <img src={g3} /></LazyLoad>
                <LazyLoad>   <img src={g4} /></LazyLoad>
                <LazyLoad> <img src={g5} /></LazyLoad>
               
                
             
               
                   
             </div>
       
               <div class="dream" 
               >
                 <LazyLoad><img src={g6}/></LazyLoad>
                 <LazyLoad><img src={g7}/></LazyLoad>
                 <LazyLoad><img src={g8}/></LazyLoad>
                 <LazyLoad><img src={g9}/></LazyLoad>
                 <LazyLoad><img src={g10}/></LazyLoad> 
             </div>
       
               <div class="dream" 
               >
                 <LazyLoad><img src={g2}/></LazyLoad>
                 <LazyLoad><img src={g4}/></LazyLoad>
                 <LazyLoad><img src={g1}/></LazyLoad>
                 <LazyLoad><img src={g3}/></LazyLoad>
                 <LazyLoad><img src={g6}/></LazyLoad>
             </div>
       
       
       
       
           </div>
           
       
       
       
       
       
         </div>
       
       
               </>
               
    );
};

export default Gallery;