import React from 'react';

import { Link } from 'react-router-dom';

import Grid from './Grid';
import Button from './Button';

const footerAboutLinks = [
	{
		display: 'history',
		path: '/history',
	},
	{
		display: 'dealer',
		path: '/dealer',
	},
	{
		display: "what's on",
		path: '/new',
	},
];

const footerBikes = [
	{
		display: 'bike classification',
		path: '/about',
	},
	{
		display: 'technology',
		path: '/about',
	},
	{
		display: 'sizing guide',
		path: '/about',
	},
	{
		display: 'bike archive',
		path: '/about',
	},
];

const footerContact = [
	{
		display: 'warranty terms & conditions',
		path: '/about',
	},
	{
		display: 'bike / warranty resistration',
		path: '/about',
	},
	{
		display: 'webstore FAQ',
		path: '/about',
	},
	{
		display: 'contact us',
		path: '/about',
	},
];
const Footer = () => {
	return (
		<footer className="footer container">
			<div className="container">
				<Grid col={4} mdCol={2} smCol={1} gap={10}>
					<div>
						<div className="footer__title">polygon</div>
						<div className="footer__content">
							{footerAboutLinks.map((item, index) => (
								<p key={index}>
									<Link to={item.path}>{item.display}</Link>
								</p>
							))}
						</div>
					</div>
					<div>
						<div className="footer__title">bikes</div>
						<div className="footer__content">
							{footerBikes.map((item, index) => (
								<p key={index}>
									<Link to={item.path}>{item.display}</Link>
								</p>
							))}
						</div>
					</div>
					<div>
						<div className="footer__title">support</div>
						<div className="footer__content">
							{footerContact.map((item, index) => (
								<p key={index}>
									<Link to={item.path}>{item.display}</Link>
								</p>
							))}
						</div>
					</div>
					<div>
						<div className="footer__title">subcribe</div>
						<div className="footer__content">
							<span>subcribe to our newsletter</span>
							<div className="footer__content__subcribe">
								<input type="text" placeholder="Your Email Address" />
								<Button size="sm">subscribe</Button>
							</div>
							<div className="footer__content__socials">
								<span>find us on socials media</span>
								<div className="footer__content__socials__icon">
									<i className="bx bxl-instagram"></i>
									<i className="bx bxl-facebook"></i>
								</div>
							</div>
						</div>
					</div>
				</Grid>
			</div>
		</footer>
	);
};

export default Footer;
