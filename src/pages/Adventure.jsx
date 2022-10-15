import React from 'react';

import productAdventureData from '../assets/fake-data/products/adventure-products';
import Helmet from '../components/Helmet';
// import Button from '../components/Button';
import Slider from '../components/Slider';

const Mtp = () => {
	return (
		<Helmet title="MTB">
			<Slider data={productAdventureData} />
		</Helmet>
	);
};

export default Mtp;
