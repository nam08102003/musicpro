import { BsFillPlayFill } from 'react-icons/bs';
import { FaHeadphonesAlt } from 'react-icons/fa';
import pc1 from '../../assets/images/podcasts/pc1.webp';
import ButtonFollow from '../elements/ButtonFollow';
import Dot from '../elements/Dot';
import Slider from 'react-slick';
import { podcastsMusic } from '../../assets/data/dataPodcasts';

const TrendingPodcast = () => {
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
        <div className="trend-podcast">
            <h1 className="title-section mt-20">Trending Podcasts</h1>
            <Slider {...settings}>
                {podcastsMusic.map((podcast) => {
                    return (
                        <div className="item-podcast">
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

export default TrendingPodcast;
