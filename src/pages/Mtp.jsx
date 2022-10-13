import React from 'react';

import productMtbData from '../assets/fake-data/products/mtb-products';
import Helmet from '../components/Helmet';
import Button from '../components/Button';
import Slider from '../components/Slider';

const Mtp = () => {
	return (
		<Helmet title="MTB">
			<Slider data={productMtbData} />
		</Helmet>
	);
};

export default Mtp;
