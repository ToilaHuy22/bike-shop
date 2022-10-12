import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';

import homeHeroSliderData from '../assets/fake-data/home-hero-slider';

const Home = () => {
	return (
		<Helmet title="Home">
			<HeroSlider data={homeHeroSliderData} control={true} auto={true} timeOut={5000} />
		</Helmet>
	);
};

export default Home;
