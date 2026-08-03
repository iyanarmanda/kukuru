import { fileURLToPath } from "node:url";
import rehypeMermaid from "rehype-mermaid";
import * as sass from "sass";

const mermaidTheme = fileURLToPath(
	new URL("../styles/mermaid.scss", import.meta.url),
);

const compiledCss = sass.compile(mermaidTheme).css;

export const rehypeMermaidConfig = [
	rehypeMermaid,
	{
		strategy: "inline-svg",
		mermaidConfig: {
			theme: "base",
			themeVariables: {
				background: "transparent",
			},
			themeCSS: compiledCss,
		},
	},
];
