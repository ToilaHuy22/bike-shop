import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/logo-white.png';

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

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__logo">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="header__menu">
					{mainNav.map((item, index) => (
						<div key={index}>
							{
								<Link to={item.path}>
									<span>{item.display}</span>
								</Link>
							}
						</div>
					))}
				</div>
				<div className="header__search">
					<div className="header__search__item">
						<i class="bx bx-search-alt-2"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
