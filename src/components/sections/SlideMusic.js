import { BsFillPlayFill } from 'react-icons/bs';
import { FaHeadphonesAlt } from 'react-icons/fa';
import ButtonFollow from '../elements/ButtonFollow';
import Slider from 'react-slick';
import { podcastsMusic } from '../../assets/data/dataPodcasts';

const SlideMusic = () => {
    const settings = {
        arrows: false,
        className: 'slider',
        // dotsClass: 'dot',
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="trend-podcast mt-40">
            <Slider {...settings}>
                {podcastsMusic.map((podcast) => {
                    return (
                        <div className="item-podcast" key={podcast.id}>
                            <img src={require(`../../assets/images/singer/${podcast.image}`)} alt="podcast" />
                            <div className="content-podcast">
                                <h2 className="name-podcast">
                                    On Purpose <span>with Jay Shetty</span>
                                </h2>
                                <div className="interative-podcast">
                                    <span className="watched">
                                        <BsFillPlayFill />
                                        10,000+ Plays
                                    </span>
                                    <span className="listening">
                                        <FaHeadphonesAlt />
                                        179 currently listening
                                    </span>
                                </div>
                                <div className="podcast-button">
                                    <ButtonFollow content="Listen now" className="text-white bg-blue width-md" />
                                    <ButtonFollow content="Add to favorites" className="text-white bg-none width-lg" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            {/* <div className="dots fl-center">
                <Dot />
                <Dot />
                <Dot />
                <Dot />
            </div> */}
        </div>
    );
};

export default SlideMusic;
