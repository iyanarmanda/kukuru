import { readFileSync } from "node:fs";
import rehypeMermaid from "rehype-mermaid";

const mermaidTheme = new URL("../styles/mermaid.css", import.meta.url);

export const rehypeMermaidConfig = [
	rehypeMermaid,
	{
		strategy: "inline-svg",
		mermaidConfig: {
			theme: "base",
			themeVariables: {
				background: "transparent",
			},
			themeCSS: readFileSync(mermaidTheme, "utf-8"),
		},
	},
];
