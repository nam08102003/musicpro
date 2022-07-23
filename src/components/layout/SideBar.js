import React from 'react';
import Search from '../elements/Search';
import { BsSearch } from 'react-icons/bs';
import Podcaster from '../sections/Podcaster';
import { podcasters } from '../../assets/data/dataPodcasters';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-inner">
                <div className="search-form">
                    <h1 className="title-section">Quick Search</h1>
                    <form action="" className="fl-center">
                        <Search placeholder="Type here to search" />
                        <button type="button">
                            <BsSearch />
                        </button>
                    </form>
                </div>
                <div className="top-podcasters mt-20">
                    <h1 className="title-section">Top Podcasters</h1>
                    <div className="list-top-podcasters">
                        {podcasters.map((podcaster) => {
                            return <Podcaster podcaster={podcaster} key={podcaster.id} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
