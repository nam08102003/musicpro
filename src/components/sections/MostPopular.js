import React from 'react';
import { podcastsMusic } from '../../assets/data/dataPodcasts';
import { BsFillPlayFill } from 'react-icons/bs';

const sliceData = podcastsMusic.slice(0, 4);
const MostPopular = () => {
    return (
        <div className="most-popular">
            <div className="wrapper">
                <h1 className="title-section mt-40">Most Popular</h1>
                <div className="list-most-popular grid">
                    {sliceData.map((music) => {
                        return (
                            <div className="most-popular-item grid-5 mx-10" key={music.id}>
                                <div className="wrapper grid">
                                    <div className="most-popular-image grid-3">
                                        <img src={require(`../../assets/images/singer/${music.image}`)} alt="podcast" />
                                    </div>
                                    <div className="most-popular-info grid-6">
                                        <h4>{music.name}</h4>
                                        <span>{music.singer}</span>
                                    </div>
                                    <div className="button-play grid-1">
                                        <span>
                                            <BsFillPlayFill />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MostPopular;
