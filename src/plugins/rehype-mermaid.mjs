import rehypeMermaid from "rehype-mermaid";

export const rehypeMermaidConfig = [
	rehypeMermaid,
	{
		strategy: "inline-svg",
	},
];
