const path=require('path')
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
	webpack: {
		alias: {
			"@": resolve("src"),
			"~": resolve("src")
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { '@primary-color': '#1890ff' },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
	babel: {
		plugins: [
			[
				"import",
				{
					libraryName: "antd",
					style: true,
				},
			],
		],
	},
};