const choose_bike_image_01 = require('../images/classify/MTB.jpg').default;
const choose_bike_image_02 = require('../images/classify/ROAD.jpg').default;
const choose_bike_image_03 = require('../images/classify/ADVENTURE.jpg').default;
const choose_bike_image_04 = require('../images/classify/URBAN.jpg').default;
const choose_bike_image_05 = require('../images/classify/EBIKE.jpg').default;
const choose_bike_image_06 = require('../images/classify/JUNIOR.jpg').default;

const chooseBike = [
	{
		title: 'MTB',
		image: choose_bike_image_01,
		description:
			"Whether it's climbing and going down steep trails or jumping high at bike parks. Enjoy your riding and discover yourself.",
		slug: 'mtp',
	},
	{
		title: 'ROAD',
		image: choose_bike_image_02,
		description:
			'Chasing for speed and against the wind, or a fun Sunday club ride with friends around town; all you need is here.',
		slug: 'road',
	},
	{
		title: 'ADVENTURE',
		image: choose_bike_image_03,
		description:
			"Whether it's a fun tour with friends on gravel roads, or just keep riding into the unknown. Unlock yourself, it all starts here. ",
		slug: 'adventure',
	},
	{
		title: 'URBAN',
		image: choose_bike_image_04,
		description:
			'Bikes have given us a lot. It helps us to live a life that we can be happy with and proud of; so we want to share that and bring a healthy and joyful day-to-day routine.',
		slug: 'urban',
	},
	{
		title: 'EBIKE',
		image: choose_bike_image_05,
		description:
			'These years, we have come further to build a smart living. We bring you our E-bikes, to take you to discover more trails, more loops, and discover future.',
		slug: 'e-bike',
	},
	{
		title: 'JUNIOR',
		image: choose_bike_image_06,
		description:
			"What's more lovely than the childhood memories? Ouch! Perhaps the one that crosses your mind right now is that first scar that you got while riding on a bike! But hey, it was also a lovely family time, the first taste of courage to learn how to get back on after falling off, and go on adventure with new friends. So, go get bikes for your kids, and see those beautiful things also happen to them.",
		slug: 'junior',
	},
];

const getAllOptionData = () => chooseBike;

const classifyData = {
	getAllOptionData,
};

export default classifyData;
