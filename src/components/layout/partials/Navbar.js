import { AiFillPieChart, AiFillCompass, AiFillSetting } from 'react-icons/ai';
import {
    BsFillFileEarmarkTextFill,
    BsFillMicFill,
    BsPlayCircleFill,
    BsFillHeartFill,
    BsFileEarmarkPlusFill,
    BsFillBarChartFill,
} from 'react-icons/bs';
import { FaFolder, FaUser, FaUpload } from 'react-icons/fa';
import { ImEarth } from 'react-icons/im';

export const navMenuLinks = [
    { name: 'Discover', href: '/', icon: AiFillCompass },
    { name: 'Trending', href: '/trending', icon: BsFillBarChartFill },
    { name: 'Genre', href: '/genre', icon: BsFillFileEarmarkTextFill },
    { name: 'Album', href: '/album', icon: FaFolder },
    { name: 'Speaker', href: '/speaker', icon: BsFillMicFill },
];

export const navLibraryLinks = [
    { name: 'Recent', href: '/recent', icon: AiFillPieChart },
    { name: 'Playlists', href: '/playlists', icon: BsPlayCircleFill },
    { name: 'Favourites', href: '/favorites', icon: BsFillHeartFill },
    { name: 'Local', href: '/local', icon: ImEarth },
];

export const navCustomizeLinks = [
    { name: 'New Playlist', href: '/new-playlist', icon: BsFileEarmarkPlusFill },
    { name: 'Import Playlist', href: '/import-playlist', icon: FaUpload },
    { name: 'Account', href: '/account', icon: FaUser },
    { name: 'Settings', href: '/settings', icon: AiFillSetting },
];
