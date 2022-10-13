import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import { Link } from 'react-router-dom';

const OptionsCard = (props) => {
	return (
		<div className="options-card">
			<Link to={`/${props.slug}`}>
				<div className="options-card__detail">
					<img src={props.img} alt="" />
					<span className="options-card__detail__title">{props.title}</span>
					<div className="options-card__detail__info">
						<div className="options-card__detail__info__description">
							{props.description}
						</div>
						<Button size="md" icon="bx bx-cycling" animate={true}>
							See bikes
						</Button>
					</div>
				</div>
			</Link>
		</div>
	);
};

OptionsCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
};

export default OptionsCard;
