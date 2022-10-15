import React from 'react';

const SectionProduct = (props) => {
	return <div className="section-product">{props.children}</div>;
};

export const SectionTitle = (props) => {
	return <div className="section-title">{props.children}</div>;
};

export const SectionBody = (props) => {
	return <div className="section-body">{props.children}</div>;
};

export default SectionProduct;
