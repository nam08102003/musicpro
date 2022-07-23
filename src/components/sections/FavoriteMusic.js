import { podcastsMusic } from '../../assets/data/dataPodcasts';
import { BsFillPlayFill } from 'react-icons/bs';

const FavoriteMusic = () => {
    return (
        <div className="favorite-music">
            <h1 className="title-section mt-20">Favortie Music</h1>
            <div className="lists-favorite-music">
                <div className="slider grid">
                    {podcastsMusic.map((music) => {
                        return (
                            <div className="favorite-item grid-2 mx-10" key={music.id}>
                                <div className="wrapper text-left">
                                    <div className="favorite-img">
                                        <img src={require(`../../assets/images/singer/${music.image}`)} alt="podcast" />
                                        <div className="button-play fl-center">
                                            <BsFillPlayFill />
                                        </div>
                                    </div>
                                    <h4 className="name">{music.name}</h4>
                                    <h5 className="singer">{music.singer}</h5>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FavoriteMusic;
