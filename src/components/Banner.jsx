import "./Banner.scss"
const Banner = ({img,alt}) => {
    return (
        <section className={'banner'}  data-aos="zoom-in">
            <img src={img} alt={alt}/>
        </section>
    )
}

export default Banner