import { type Config } from "prettier";

const config: Config = {
	useTabs: true,
	tabWidth: 4,
	plugins: [
		"prettier-plugin-tailwindcss",
		"prettier-plugin-css-order",
		"prettier-plugin-sort-json",
	],
};

export default config;
