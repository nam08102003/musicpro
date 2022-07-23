import React from 'react';
import SlideMusic from '../components/sections/SlideMusic';
import RecentlyPlayed from '../components/sections/RecentlyPlayed';
import MostPopular from '../components/sections/MostPopular';
import FavoriteMusic from '../components/sections/FavoriteMusic';
import FavoriteSinger from '../components/sections/FavoriteSinger';
import NewMusic from '../components/sections/NewMusic';
import Event from '../components/sections/Event';

const Home = () => {
    return (
        <div className="home-main-page w-full">
            <div className="container">
                <div className="home-content-main w-full px-40">
                    <SlideMusic />
                    <RecentlyPlayed />
                    <MostPopular />
                    <FavoriteSinger />
                    <NewMusic />
                    <FavoriteMusic />
                    <Event />
                </div>
            </div>
        </div>
    );
};

export default Home;
