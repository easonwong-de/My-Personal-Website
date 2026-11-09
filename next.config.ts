import crypto from "node:crypto";
import path from "node:path";

import type { NextConfig } from "next";
import unimport from "unimport/unplugin";

interface LoaderContext {
	rootContext: string;
	resourcePath: string;
}

interface CssLoaderModulesOptions {
	getLocalIdent?: (
		context: LoaderContext,
		localIdentName: string,
		exportName: string,
		options?: unknown,
	) => string;
	[key: string]: unknown;
}

interface CssLoaderOptions {
	modules?: CssLoaderModulesOptions;
	[key: string]: unknown;
}

interface WebpackLoader {
	loader?: string;
	options?: CssLoaderOptions;
}

interface WebpackRule {
	oneOf?: WebpackRule[];
	use?: WebpackLoader[] | WebpackLoader;
}

function getHashIdent(
	context: LoaderContext,
	_localIdentName: string,
	exportName: string,
): string {
	const relativePath = path
		.relative(context.rootContext, context.resourcePath)
		.replace(/\\+/g, "/");
	const hash = crypto
		.createHash("sha256")
		.update(`filePath:${relativePath}#className:${exportName}`)
		.digest("base64")
		.replace(/[^a-zA-Z0-9-_]/g, "_")
		.slice(0, 8);
	return (/^[0-9]/.test(hash) ? "_" : "") + hash;
}

const config: NextConfig = {
	output: "export",
	images: { unoptimized: true },
	experimental: {
		useLightningcss: true,
		optimizePackageImports: ["gsap", "@gsap/react"],
	},
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? { exclude: ["error"] }
				: false,
	},
	webpack: (webpackConfig: {
		module?: {
			rules?: (WebpackRule | false | null | undefined | "" | 0)[];
		};
		plugins?: unknown[];
		[key: string]: unknown;
	}) => {
		webpackConfig.plugins?.push(
			unimport.webpack({
				presets: ["react"],
				dirs: ["./src/components", "./src/sections"],
				dts: true,
			}),
		);

		const rules = webpackConfig.module?.rules;
		if (Array.isArray(rules)) {
			const oneOfRule = rules.find(
				(rule): rule is WebpackRule & { oneOf: WebpackRule[] } =>
					typeof rule === "object" &&
					rule !== null &&
					"oneOf" in rule &&
					Array.isArray(rule.oneOf),
			);
			if (oneOfRule) {
				for (const rule of oneOfRule.oneOf) {
					if (Array.isArray(rule.use)) {
						for (const loader of rule.use) {
							if (
								typeof loader.loader === "string" &&
								loader.loader.includes("css-loader") &&
								loader.options?.modules
							) {
								loader.options.modules.getLocalIdent =
									getHashIdent;
							}
						}
					}
				}
			}
		}
		return webpackConfig;
	},
};

export default config;
