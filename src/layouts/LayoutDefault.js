import React, { useEffect, useState, useRef } from 'react';
import { MusicContext } from '../Context';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import Audio from '../audio/Audio';
import MusicControll from '../components/sections/MusicControll';
import { navMenuLinks, navLibraryLinks, navCustomizeLinks } from '../components/layout/partials/Navbar';
import { podcastsMusic } from '../assets/data/dataPodcasts';

const LayoutDefault = ({ children }) => {
    const [active, setActive] = useState(false);
    const [idMusic, setIdMusic] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [timeCurrent, setTimeCurrent] = useState(0);
    const [changeTime, setChangeTime] = useState(false);
    const [progress, setProgress] = useState(0);
    const [timeDuration, setTimeDuration] = useState(0);
    const [music, setMusic] = useState(podcastsMusic[0]);

    const handleSetMusic = (idSong) => {
        let music;
        if (isRandom) {
            let idRandom = Math.floor(Math.random() * podcastsMusic.length);
            console.log(idRandom);
            music = podcastsMusic[idRandom];
            setIdMusic(idRandom);
            setMusic(music);
        } else if (isRepeat) {
            setIdMusic(idMusic);
            setMusic(music);
        } else {
            music = podcastsMusic.find((music) => music.id === idSong);
            setIdMusic(idSong);
            if (!music) {
                setMusic(podcastsMusic[0]);
            } else {
                setMusic(music);
            }
        }
    };

    const handleSetTime = (time1, time2) => {
        setTimeCurrent(time1);
        setTimeDuration(time2);
    };

    const handleProgress = (value) => {
        let seekTime = (timeDuration / 100) * value;
        setChangeTime(true);
        setProgress(seekTime);
    };

    const handleSetPlay = (value) => {
        setIsPlaying(value);
    };

    useEffect(() => {
        if (isPlaying) setActive(true);
    }, [music, isPlaying, isRepeat, isRandom]);

    return (
        <>
            <div className="wrapper-page">
                <MusicContext.Provider
                    value={{
                        music,
                        handleSetMusic,
                        podcastsMusic,
                        handleSetPlay,
                        idMusic,
                        isPlaying,
                        isRepeat,
                        setIsRepeat,
                        isRandom,
                        setIsRandom,
                        timeCurrent,
                        timeDuration,
                        progress,
                        changeTime,
                        setChangeTime,
                        handleSetTime,
                        handleProgress,
                    }}
                >
                    <NavBar MenuNav={navMenuLinks} LibraryNav={navLibraryLinks} CustomNav={navCustomizeLinks} />
                    <div className="page-main-content">
                        <Header />
                        <div className="site-content">{children}</div>
                        <div className={`controll-play-music ${active ? 'active' : ''}`}>
                            <MusicControll />
                        </div>
                        <Footer />
                    </div>
                    <Audio status={isPlaying} />
                </MusicContext.Provider>
            </div>
        </>
    );
};

export default LayoutDefault;
