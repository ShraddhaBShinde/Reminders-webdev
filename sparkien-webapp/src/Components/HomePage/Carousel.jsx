import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

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
    const Images = ["https://media.istockphoto.com/photos/yellow-notification-bell-with-one-new-notification-on-blue-background-picture-id1307886792?b=1&k=20&m=1307886792&s=170667a&w=0&h=e9XSgQOrg07WPLajEaN4TFki06d6SZK3kjeDQ0NX1ic=",
"https://media.istockphoto.com/photos/reminder-word-written-by-3d-hand-picture-id468092076?b=1&k=20&m=468092076&s=170667a&w=0&h=tgTVub1rhIPJd7CwsTdLwIK5jmE706AG0XOslFObgxQ=",
"https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVtaW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://media.istockphoto.com/photos/its-time-to-learn-programming-the-concept-of-a-call-to-action-picture-id1336114192?b=1&k=20&m=1336114192&s=170667a&w=0&h=Hb74ksRP9DXvx2QTwcdIi53DpFYcrh1Brivaq2v3Tgo=",];



    return (
        <>
        <div className="events hidden lg:flex justify-center">
        <Carousel itemPosition={consts.BETWEEN} itemsToShow={2} showDots={false} >
            {Images.map((image)=> (
                <div className="w-[200px] h-[600px]">
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