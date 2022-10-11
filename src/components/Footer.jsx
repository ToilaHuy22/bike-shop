import React from 'react';

import { Link } from 'react-router-dom';

import Grid from './Grid';

// import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
	{
		display: 'Giới thiệu',
		path: '/about',
	},
	{
		display: 'Liên hệ',
		path: '/about',
	},
	{
		display: 'Tuyển dụng',
		path: '/about',
	},
	{
		display: 'Tin tức',
		path: '/about',
	},
	{
		display: 'Hệ thống cửa hàng',
		path: '/about',
	},
];

const footerCustomerLinks = [
	{
		display: 'Chính sách đổi trả',
		path: '/about',
	},
	{
		display: 'Chính sách bảo hành',
		path: '/about',
	},
	{
		display: 'Chính sách hoàn tiền',
		path: '/about',
	},
];
const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">Footer</div>
		</footer>
	);
};

export default Footer;