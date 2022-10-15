import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const ProductCard = (props) => {
	return (
		<div className="product-card">
			<Link to={`/${props.slug}`}>
				<div className="product-card__image">
					<img src={props.img01} alt="" />
					<img src={props.img02} alt="" />
				</div>
				<h3 className="product-card__title">{props.title}</h3>
			</Link>
			<div className="product-card__info">
				<div className="product-card__info__options">
					<span>{props.option}</span>
				</div>
				<div className="product-card__info__description">{props.description}</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	img01: PropTypes.string.isRequired,
	img02: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	option: PropTypes.array.isRequired,
	slug: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	classify: PropTypes.array.isRequired,
};

export default ProductCard;
