import Slider from "react-slick";

const Carousel = ({images}) =>{

    // console.log(images)
    // images.forEach(el=>console.log(el))
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    }
    return (
        <section data-aos="fade" data-aos-duration={'500'} className="carousel">
            <Slider {...settings}>
                {images.map((el,i)=><div key={i} ><img src={el}/></div>)}
            </Slider>
        </section>
    )
}

export default Carousel