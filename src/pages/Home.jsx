import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Options, { OptionsBody, OptionsTitle } from '../components/Options';
import Grid from '../components/Grid';
import OptionsCard from '../components/OptionsCard';

import classifyData from '../assets/fake-data/choose-bikes';
import homeHeroSliderData from '../assets/fake-data/home-hero-slider';

const Home = () => {
	return (
		<Helmet title="Home">
			<HeroSlider data={homeHeroSliderData} control={true} auto={true} timeOut={5000} />

			<Options>
				<OptionsTitle>Choose Your Bike</OptionsTitle>
				<OptionsBody>
					<Grid col={3} mdCol={2} smCol={1} gap={20}>
						{classifyData.getAllOptionData().map((item, index) => (
							<OptionsCard
								key={index}
								img={item.image}
								title={item.title}
								description={item.description}
								slug={item.slug}
							/>
						))}
					</Grid>
				</OptionsBody>
			</Options>

			{/* <Options>
				<OptionsTitle></OptionsTitle>
			</Options> */}
		</Helmet>
	);
};

export default Home;
