import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
			"auto-imports.d.ts",
			"unimport.d.ts",
			"eslint.config.mjs",
		],
	},
	...compat.extends(
		"next/core-web-vitals",
		"next/typescript",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
	),
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: __dirname,
			},
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "error",
			"react/jsx-no-undef": "off",
			"no-undef": "off",
		},
	},
];

export default eslintConfig;
