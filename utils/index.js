import {
	CloudWatchClient,
	GetMetricDataCommand,
} from '@aws-sdk/client-cloudwatch';

const cloudWatchClient = new CloudWatchClient({
	region: 'ap-southeast-1',
	credentials: {
		accessKeyId: String(process.env.AWS_ACCESS_KEY),
		secretAccessKey: String(process.env.AWS_SECRET_KEY),
	},
});

export const getMetrics = async (params) => {
	try {
		const data = await cloudWatchClient.send(
			new GetMetricDataCommand(params)
		);
		console.log('getMetrics: ', data);
	} catch (err) {
		console.error(err);
	}
};
