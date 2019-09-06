import React from 'react';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';
import Posts from 'components/Posts';

const Home = function(props) {
    return <Main sidebar={<Sidebar />} content={<Posts />}></Main>;
};

export default Home;
