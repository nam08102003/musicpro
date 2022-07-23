import React, { useContext, useState, useRef, useEffect } from 'react';
import { MusicContext } from '../Context';

const Audio = ({ status }) => {
    const audioRef = useRef(null);
    const {
        music,
        podcastsMusic,
        idMusic,
        handleSetMusic,
        handleSetTime,
        handleSetPlay,
        isRepeat,
        progress,
        changeTime,
        setChangeTime,
    } = useContext(MusicContext);

    const handlePlay = () => {
        if (status) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    if (changeTime) {
        audioRef.current.currentTime = progress;
        setChangeTime(false);
    }

    const handleSetEnd = () => {
        if (isRepeat) {
            audioRef.current.currentTime = 0;
        } else {
            if (idMusic === podcastsMusic.length) {
                handleSetMusic(1);
            } else {
                handleSetMusic(idMusic + 1);
            }
        }
        handleSetPlay(true);
    };
    useEffect(() => {
        handlePlay();
    }, [music, status, progress, isRepeat]);
    return (
        <audio
            ref={audioRef}
            src={require(`../assets/music/${music.music}`)}
            onLoadedData={handlePlay}
            onEnded={handleSetEnd}
            onTimeUpdate={() => handleSetTime(audioRef.current.currentTime, audioRef.current.duration)}
        />
    );
};

export default Audio;
