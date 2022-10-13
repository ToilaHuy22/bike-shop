import React from 'react';
import PropTypes from 'prop-types';

const Slider = (props) => {
	const data = props.data;

	const slider = data.getSlider();

	return (
		<div className="hero-slider">
			{slider.map((item, index) => (
				<div className="hero-slider__item" key={index}>
					<div className="hero-slider__item__img">
						<img src={item.img} alt="" />
					</div>
					<div className="hero-slider__item__info">
						<div className="hero-slider__item__info__description">
							{item.description}
						</div>
						<div className="hero-slider__item__info__title">
							{item.title}
							<i class="bx bx-chevron-down"></i>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

Slider.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Slider;
