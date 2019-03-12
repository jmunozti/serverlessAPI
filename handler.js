import fetch from 'node-fetch'

export const prices = async (event, context) => {
	return {
		statusCode: 200,
		body: await getPrices({
			status: 'done'
		}),

	};
};

const getPrices = ({
	...rest
}) => new Promise((resolve, reject) =>


	fetch('http://api.bitcoincharts.com/v1/weighted_prices.json')
	.then(response => response.json())
	.then(data => {
		console.log(rest.status)
		resolve(data);
	})

);

export const markets = async (event, context) => {
	return {
		statusCode: 200,
		body: await getMarketsData({
			status: 'done'
		}),

	};
};

const getMarketsData = ({
	...rest
}) => new Promise((resolve, reject) =>


	fetch('http://api.bitcoincharts.com/v1/markets.json')
	.then(response => response.json())
	.then(data => {
		console.log(rest.status)
		resolve(data);
	})

);