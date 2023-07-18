import React from 'react';
import Banner from '../banner/Banner';
import OutdoorFun from '../outdoorfun/OutdoorFun';
import SpecialCollection from '../speacialcollection/SpecialCollection';
import Brands from '../brands/Brands';
import ShopCategory from '../shopcategory/ShopCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OutdoorFun></OutdoorFun>
            <ShopCategory></ShopCategory>
            <SpecialCollection></SpecialCollection>
            <Brands></Brands>
        </div>
    );
};

export default Home;