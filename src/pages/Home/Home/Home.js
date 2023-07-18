import React from 'react';
import Banner from '../banner/Banner';
import OutdoorFun from '../outdoorfun/OutdoorFun';
import SpecialCollection from '../speacialcollection/SpecialCollection';
import Brands from '../brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OutdoorFun></OutdoorFun>
            <SpecialCollection></SpecialCollection>
            <Brands></Brands>
        </div>
    );
};

export default Home;