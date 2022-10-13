const slide_image = require('../../images/bikes-info/ADVENTURE-1920-1920x1080.jpg').default;

const slider = [
	{
		img: slide_image,
		title: 'Explore our lineup',
		description:
			"Whether it's a fun tour with friends on gravel roads, or just keep riding into the unknown. Unlock yourself, it all starts here.",
	},
];

const getSlider = () => slider;

const productAdventureData = {
	getSlider,
};

export default productAdventureData;
