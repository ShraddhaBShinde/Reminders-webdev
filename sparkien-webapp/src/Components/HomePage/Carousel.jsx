import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import IMAGES from "../../Images/images";

const ImageCard = (props) => {
    return (
        <>
        <div className="w-60 h-50 px-2 m-4 justify-between">
            <img
            className ="w-50 h-50 rounded-xl justify-between"
            src={props.src}
            alt="Image Card"
            />
        </div>
        </>
    );
};
const ImageCardCarousel = () => {
    const Images = [ IMAGES.SignUp ];



    return (
        <>
        <div className="events hidden lg:flex justify-center">
        <Carousel itemPosition={consts.BETWEEN} itemsToShow={2} showDots={false} >
            {Images.map((image)=> (
                <div className="w-10 h-10">
                <ImageCard src={image}/>
                </div>
            ))}
        </Carousel>
        </div>
        <div className="events lg:hidden">
        <Carousel itemPosition={consts.BETWEEN} itemsToShow={1} showDots={false} >
            {Images.map((image)=> (
                <ImageCard src={image}/>
            ))}
        </Carousel>
        </div>
        </>
    )
};

export default ImageCardCarousel;