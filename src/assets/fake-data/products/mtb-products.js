const slide_image = require('../../images/bikes-info/Mountain-1-1920x1080.jpg').default;

const product_01_image_01 = require('../../images/products/MTB/product-1-1.png').default;
const product_01_image_02 = require('../../images/products/MTB/product-1-2.png').default;

const product_02_image_01 = require('../../images/products/MTB/product-2-1.png').default;
const product_02_image_02 = require('../../images/products/MTB/product-2-2.png').default;

const product_03_image_01 = require('../../images/products/MTB/product-3-1.png').default;
const product_03_image_02 = require('../../images/products/MTB/product-3-2.png').default;

const product_04_image_01 = require('../../images/products/MTB/product-4-1.png').default;
const product_04_image_02 = require('../../images/products/MTB/product-4-2.png').default;

const product_05_image_01 = require('../../images/products/MTB/product-5-1.png').default;
const product_05_image_02 = require('../../images/products/MTB/product-5-2.png').default;

const product_06_image_01 = require('../../images/products/MTB/product-6-1.png').default;
const product_06_image_02 = require('../../images/products/MTB/product-6-2.png').default;

const product_07_image_01 = require('../../images/products/MTB/product-7-1.png').default;
const product_07_image_02 = require('../../images/products/MTB/product-7-2.png').default;

const slider = [
	{
		img: slide_image,
		title: 'Explore our lineup',
		description:
			"Whether it's climbing and going down steep trails or jumping high at bike parks. Enjoy your riding and discover yourself.",
	},
];

const products = [
	{
		title: 'siskiu n',
		option: 'n9',
		// categorySLug:'siskiu'
		slug: 'siskiu-n',
		image01: product_01_image_01,
		image02: product_01_image_02,
		description: 'A burly machine that beats any steepest terrain',
	},
	{
		title: 'siskiu t',
		option: ['t8', 't7'],
		// categorySLug:'siskiu'
		slug: 'siskiu-t',
		image01: product_02_image_01,
		image02: product_02_image_02,
		description: 'Tackle any steep climbs and confident on any technical descents.',
	},
	{
		title: 'siskiu d',
		option: ['dse', 'd7', 'd6', 'd5'],
		// categorySLug:'siskiu'
		slug: 'siskiu-d',
		image01: product_03_image_01,
		image02: product_03_image_02,
		description: 'Perfect for riders to tackle XC riding with some aggression.',
	},
	{
		title: 'syncline c',
		option: ['c5', 'c3', 'c2'],
		// categorySLug:'siskiu'
		slug: 'siskiu-n',
		image01: product_04_image_01,
		image02: product_04_image_02,
		description: 'Devoted for pro cross-country racers to trail seekers',
	},
	{
		title: 'xtrada',
		option: ['7', '6', '5', 'jr 24'],
		// categorySLug:'siskiu'
		slug: 'xtrada',
		image01: product_05_image_01,
		image02: product_05_image_02,
		description: 'Born to cross singletracks and endless miles.',
	},
	{
		title: 'premier',
		option: ['5', '4'],
		// categorySLug:'siskiu'
		slug: 'premier',
		image01: product_06_image_01,
		image02: product_06_image_02,
		description: 'The way to mountains starts here',
	},
	{
		title: 'cascade',
		option: ['4', '3', '2'],
		// categorySLug:'siskiu'
		slug: 'cascade',
		image01: product_07_image_01,
		image02: product_07_image_02,
		description: 'The way to mountains starts here',
	},
];

const getSlider = () => slider;

const getAllProducts = () => products;

const getProducts = (count) => {
	const max = products.length - count;
	const min = 0;
	const start = Math.floor(Math.random() * (max - min) + min);
	return products.slice(start, start + count);
};

const productMtbData = {
	getAllProducts,
	getProducts,
	getSlider,
};

export default productMtbData;
