import React from 'react';
import Banner from './Banner';
import Discount from './Discount';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Discount></Discount>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </div>
    );
};

export default Home;