import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import useWindowDimensions from "./useWindowDimension";
import { urlFor } from "../../asset/client";
const Team = ({aboutContent}) => {
  console.log(aboutContent)
  const { height, width } = useWindowDimensions();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1050, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log(width);
  return (
    <div className="lg:mt-16 lg:mb-0 mb-6 lg:mx-0 mx-8 ">
      <div>
        <h1 className="text-center font-bold text-[#272727] text-5xl font-[Neue Haas Grotesk Display Pro]">
          <span className="lg:bg-[#ebe3d6] mx-2  rounded-xl px-4  mt-2 py-2  lg:w-[460px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          >   Our Team </h4></span> 
        </h1>
      </div>
      <div className="lg:mt-12 mt-6 lg:mb-0 my-6">
       {/* {aboutContent && <Carousel
          swipeable={false}
          draggable={width <= 500 ? true : false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .8"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
      
             
       
       
              
          
         
      
        </Carousel>} */}
        <Swiper
          spaceBetween={0}
          className=""
          draggable={true}
          breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
       
         1440:{
          width:1440,
          slidesPerView:4
        }
      }}
          autoplay={{
            delay: 800,
            disableOnInteraction:false,
          }}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          
           {
        aboutContent.TeamImage && aboutContent.TeamImage.data.map((about)=>(
          <SwiperSlide>
          <div className="mx-2 my-12 lg:my-12">
            <img
              className="xl:w-[600px] ] w-[100%] rounded-xl"
              src={about && process.env.REACT_APP_UPLOAD_URL +  about.attributes.url}
              alt=""
            />
            
          </div>
            </SwiperSlide>
        ))
       }
        
       
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
