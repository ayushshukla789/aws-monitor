import { subHours } from 'date-fns';

// Define parameters for CPU metric
export const cpuParams = {
	StartTime: subHours(new Date(), 1), // 1 hour ago
	EndTime: new Date(), // Now
	MetricDataQueries: [
		{
			Id: 'cpu',
			MetricStat: {
				Metric: {
					Namespace: 'AWS/EC2',
					MetricName: 'CPUUtilization',
					Dimensions: [
						{
							Name: 'InstanceId',
							Value: 'i-059bbf2ed69b282aa',
						},
					],
				},
				Period: 300, // 5 minutes
				Stat: 'Average',
				Unit: 'Percent',
			},
		},
	],
};
