import React from 'react';
import TrendingPodcast from '../components/sections/TrendingPodcast';
import RecentlyPlayed from '../components/sections/RecentlyPlayed';
import MostPopular from '../components/sections/MostPopular';
import SideBar from '../components/layout/SideBar';
import FavoriteMusic from '../components/sections/FavoriteMusic';

const Home = () => {
    return (
        <div className="home-main-page">
            <div className="container grid">
                <div className="home-content-main grid-7 mx-15 px-40">
                    <TrendingPodcast />
                    <RecentlyPlayed />
                    <MostPopular />
                    <FavoriteMusic />
                </div>
                <div className="home-sidebar grid-3">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Home;
