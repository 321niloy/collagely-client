import one from '../../../public/Image/collage/six.jpg'
import two from '../../../public/Image/collage/seven.jpg'
import  three from '../../../public/Image/collage/eight.jpg'
import four  from '../../../public/Image/collage/nine.jpg'

const Banner = () => {
    return (
        <>
     <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
  <img className='w-full h-96' src={one} alt="" />
  </div> 
  <div id="item2" className="carousel-item w-full">
  <img className='w-full h-96' src={two} alt="" />
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img className='w-full h-96' src={three} alt="" />
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img className='w-full h-96' src={four} alt="" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </>
    );
};

export default Banner;