import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const HeroSlider = (props) => {
	const data = props.data;

	const timeOut = props.timeOut ? props.timeOut : 5000;

	const [activeSlide, setActiveSlide] = useState(0);

	const nextSlide = useCallback(() => {
		const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
		setActiveSlide(index);
	}, [activeSlide, data]);

	const prevSlide = () => {
		const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;

		setActiveSlide(index);
	};

	useEffect(() => {
		if (props.auto) {
			const slideAuto = setInterval(() => {
				nextSlide();
			}, timeOut);
			return () => {
				clearInterval(slideAuto);
			};
		}
	}, [nextSlide, timeOut, props]);

	return (
		<div className="home-hero-slider">
			{data.map((item, index) => (
				<HomeHeroSliderItem key={index} item={item} active={index === activeSlide} />
			))}

			{props.control ? (
				<div className="home-hero-slider__control">
					<div className="home-hero-slider__control__item__left" onClick={prevSlide}>
						<i className="bx bx-chevron-left"></i>
					</div>
					<div
						className="home-hero-slider__control__item__right"
						onClick={nextSlide}
					>
						<i className="bx bx-chevron-right"></i>
					</div>
				</div>
			) : null}
		</div>
	);
};

const HomeHeroSliderItem = (props) => (
	<div className={`home-hero-slider__item ${props.active ? 'active' : ''}`}>
		<div className="home-hero-slider__item__img">
			<img src={props.item.img} alt="" />
		</div>
	</div>
);

HeroSlider.propTypes = {
	data: PropTypes.array.isRequired,
	control: PropTypes.bool,
	auto: PropTypes.bool,
	timeOut: PropTypes.number,
};

export default HeroSlider;
