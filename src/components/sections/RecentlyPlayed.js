import React, { useContext, useState, useEffect } from 'react';
import { podcastsMusic } from '../../assets/data/dataPodcasts';
import { BsFillPlayFill } from 'react-icons/bs';
import { MusicContext } from '../../Context';

const RecentlyPlayed = ({ total }) => {
    // const [isPlaying, setIsPlaying] = useState(false)
    const [idMusic, setIdMusic] = useState(1);
    const { music, handleSetMusic, podcastsMusic, handleSetPlay, isPlaying } = useContext(MusicContext);
    const clickMusic = (idMusic) => {
        setIdMusic(idMusic);
        handleSetMusic(idMusic);
        handleSetPlay(true);
    };

    useEffect(() => {
        setIdMusic(music.id);
    }, [music]);

    return (
        <div className="rencent-played">
            <h1 className="title-section mt-40">Recently Played</h1>
            <div className="list-recently grid">
                {podcastsMusic.map((music) => {
                    return (
                        <div className="recently-item grid-2 mx-15" key={music.id}>
                            <div className="wrapper text-left">
                                <div className="recently-img" onClick={() => clickMusic(music.id)}>
                                    <img src={require(`../../assets/images/singer/${music.image}`)} alt="podcast" />
                                    <div className="button-play fl-center">
                                        <BsFillPlayFill />
                                    </div>
                                </div>
                                <h4 className="name" onClick={() => clickMusic(music.id)}>
                                    {music.name}
                                </h4>
                                <h5 className="singer">{music.singer}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentlyPlayed;
