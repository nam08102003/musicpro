import React, { useContext, useEffect, useRef } from 'react';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BsFillPlayFill, BsFillPauseFill, BsArrowRepeat } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { MusicContext } from '../../Context';

const MusicControll = () => {
    const progressRef = useRef(null);
    const {
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
        handleProgress,
    } = useContext(MusicContext);

    const handlePlayPause = () => {
        handleSetPlay(!isPlaying);
    };

    if (isPlaying) {
        let progressPercent = Math.floor((timeCurrent / timeDuration) * 100);
        progressRef.current.value = progressPercent;
    }

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time - minutes * 60);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return minutes + ' : ' + seconds;
    };

    const handleBackMusic = () => {
        let idSong;
        if (idMusic === 1) {
            idSong = podcastsMusic.length;
        } else {
            idSong = idMusic - 1;
        }

        handleSetMusic(idSong);
    };

    const handleNextMusic = () => {
        let idSong;
        if (idMusic === podcastsMusic.length) {
            idSong = 1;
        } else {
            idSong = idMusic + 1;
        }

        handleSetMusic(idSong);
    };

    const handleRePeat = () => {
        if (isRepeat) {
            setIsRepeat(false);
        } else {
            setIsRepeat(true);
        }
    };

    const handleRandom = () => {
        if (isRandom) {
            setIsRandom(false);
        } else {
            setIsRandom(true);
        }
    };

    useEffect(() => {}, [timeCurrent, timeDuration, isRepeat]);
    return (
        <div className="wrapper grid">
            <div className="music-playing grid-4">
                <div className="info-music-playing">
                    <img src={require(`../../assets/images/singer/${music.image}`)} alt="podcast" />
                    <div className="info-main">
                        <h4>{music.name}</h4>
                        <span>{music.singer}</span>
                    </div>
                </div>
            </div>
            <div className="controll-option grid-6 grid">
                <div className="time-bar fl-center grid-5">
                    <span>{formatTime(timeCurrent)}</span>
                    <input
                        ref={progressRef}
                        type="range"
                        id="progress"
                        step="1"
                        min="0"
                        max="100"
                        onChange={(e) => handleProgress(e.target.value)}
                    />
                    <span>{formatTime(timeDuration)}</span>
                </div>
                <div className="button-action fl-center grid-5">
                    <div className={`repeat-btn ${isRepeat ? 'isactive' : ''}`} onClick={handleRePeat}>
                        <BsArrowRepeat />
                    </div>
                    <div onClick={handleBackMusic}>
                        <AiFillStepBackward />
                    </div>
                    <div className="play-pause fl-center" onClick={handlePlayPause}>
                        <span className={`play-btn ${isPlaying ? 'dpl-none' : 'dpl-block'}`}>
                            <BsFillPlayFill />
                        </span>
                        <span className={`pause-btn ${isPlaying ? 'dpl-block' : 'dpl-none'}`}>
                            <BsFillPauseFill />
                        </span>
                    </div>
                    <div onClick={handleNextMusic}>
                        <AiFillStepForward />
                    </div>
                    <div className={`random-btn ${isRandom ? 'isactive' : ''}`} onClick={handleRandom}>
                        <FaRandom />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicControll;
