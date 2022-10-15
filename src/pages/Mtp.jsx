import React, { useState, useCallback, useEffect, useRef } from 'react';

import productMtbData from '../assets/fake-data/products/mtb-products';
import classifyMtb from '../assets/fake-data/classify/classifyMtb';

import Helmet from '../components/Helmet';
// import Button from '../components/Button';
import Slider from '../components/Slider';
import SectionProduct, { SectionTitle, SectionBody } from '../components/SectionProduct';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import CheckBox from '../components/CheckBox';

const Mtp = () => {
	const initFilter = {
		classify: [],
	};

	const productList = productMtbData.getAllProducts();

	const [products, setProducts] = useState(productList);

	const [filter, setFilter] = useState(initFilter);

	const filterSelect = (checked, item) => {
		if (checked) {
			setFilter({
				...filter,
				classify: [...filter.classify, item.classify],
			});
		} else {
			const newClassify = filter.classify.filter((e) => e !== item.classify);
			setFilter({ ...filter, classify: newClassify });
		}
	};

	const updateProducts = useCallback(() => {
		let temp = productList;

		if (filter.classify.length > 0) {
			temp = temp.filter((e) => filter.classify.includes(e.classify));
		}
		setProducts(temp);
	}, [filter, productList]);

	useEffect(() => {
		updateProducts();
	}, [updateProducts]);

	const filterRef = useRef(null);

	return (
		<Helmet title="MTB">
			<Slider data={productMtbData} />
			<SectionProduct>
				<SectionTitle>Explore our lineup</SectionTitle>
				<SectionBody>
					<div ref={filterRef}>
						{classifyMtb.map((item, index) => (
							<CheckBox
								key={index}
								label={item.display}
								onChange={(input) => filterSelect(input.checked, item)}
								checked={filter.classify.includes(item.classify)}
							/>
						))}
					</div>
					<Grid col={3} mdCol={2} smCol={1} gap={20}>
						{products.map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								img02={item.image02}
								title={item.title}
								option={item.option}
								slug={item.slug}
								description={item.description}
								classify={classifyMtb}
							/>
						))}
					</Grid>
				</SectionBody>
			</SectionProduct>
		</Helmet>
	);
};

export default Mtp;
