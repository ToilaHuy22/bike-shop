import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/logo-white.png';
import mt from '../assets/images/bikes-info/DurtJump.jpg';

const mainNav = [
	{
		display: 'bikes',
		path: '/',
	},
	{
		display: 'dealer',
		path: '/',
	},
	{
		display: 'compare',
		path: '/',
	},
	{
		display: 'global',
		path: '/',
	},
];

const bikeNav = [
	{
		display: 'MTB',
		path: '/mtp',
	},
	{
		display: 'DJ/BMX',
		path: '/durt-jump',
	},
	{
		display: 'ROAD',
		path: '/road',
	},
	{
		display: 'ADVENTURE',
		path: '/adventure',
	},
	{
		display: 'URBAN',
		path: '/urban',
	},
	{
		display: 'E-BIKE',
		path: '/e-bike',
	},
	{
		display: 'JUNIOR',
		path: '/junior',
	},
];

const Header = () => {
	const [isHovering, setIsHovering] = useState(true);

	const handleMouseEnter = (e) => {
		setIsHovering(false);
	};

	const handleMouseLeave = () => {
		setIsHovering(true);
	};

	const headerRef = useRef(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className="header" ref={headerRef}>
			<div className="container">
				<div className="header__logo">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="header__menu">
					{mainNav.map((item, index) =>
						item.display === 'bikes' ? (
							<div
								key={index}
								className="header__menu__item"
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								{
									<Link to={item.path}>
										<span>{item.display}</span>
									</Link>
								}
							</div>
						) : (
							<div
								key={index}
								className="header__menu__item"
								// onMouseEnter={handleMouseEnter}
								// onMouseLeave={handleMouseLeave}
							>
								{
									<Link to={item.path}>
										<span>{item.display}</span>
									</Link>
								}
							</div>
						)
					)}
				</div>
				<div className="header__search">
					<div className="header__search__item">
						<i className="bx bx-search-alt-2"></i>
					</div>
				</div>
			</div>
			<div
				className={`header__bikes ${isHovering ? '' : 'hidden'} `}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="container">
					<div className="header__bikes__content">
						<ul className="header__bikes__content__list">
							{bikeNav.map((item, index) => (
								<div
									key={index}
									className="header__bikes__content__list__item"
								>
									{
										<Link to={item.path}>
											<span>{item.display}</span>
										</Link>
									}
								</div>
							))}
						</ul>
						<div className="header__bikes__content__info">
							<ul className="header__bikes__content__info__left">
								<li className="header__bikes__content__info__left__item">
									ALL MTB BIKES LEISURE
								</li>
								<li className="header__bikes__content__info__left__item">
									LEISURE
								</li>
								<li className="header__bikes__content__info__left__item">
									CROSS COUNTRY
								</li>
								<li className="header__bikes__content__info__left__item">
									TRAIL ENDURO
								</li>
							</ul>
							<div className="header__bikes__content__info__right">
								<img src={mt} alt="" />
								<span>
									No hands, more tricks. With our robust and specific
									geometry designed dirt jumpers, you'll go from ground to
									air and back again smoothly and safely.jump on cloud nine
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
