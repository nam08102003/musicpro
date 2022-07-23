import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Slider from 'react-slick';
import { podcastsMusic } from '../../assets/data/dataPodcasts';

const NewMusic = () => {
    const settings = {
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className="new-music">
            <div className="new-music-title grid">
                <h1 className="title-section mt-20 grid-9">New Music</h1>
                <div className="button-see-all grid-1">
                    <button type="button" className="fl-center">
                        See All
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
            <div className="lists-new-music">
                <Slider {...settings} className="slider">
                    {podcastsMusic.map((music) => {
                        return (
                            <div className="new-music-item mx-10" key={music.id}>
                                <div className="wrapper grid">
                                    <div className="grid-3">
                                        <img src={require(`../../assets/images/singer/${music.image}`)} alt="music" />
                                    </div>
                                    <div className="new-music-content grid-7">
                                        <div className="new-music-info">
                                            <h4>{music.name}</h4>
                                            <span>{music.singer}</span>
                                        </div>
                                        <div className="new-music-created">
                                            <span>19.07.2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default NewMusic;
