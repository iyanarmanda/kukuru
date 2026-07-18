import { siteConfig } from "@/config";
import type { LIGHT_DARK_MODE, SupportedLang } from "@/types/config";

export const PAGE_SIZE = 8;

export const LIGHT_MODE = "light",
	DARK_MODE = "dark",
	AUTO_MODE = "auto";
export const DEFAULT_THEME: LIGHT_DARK_MODE = AUTO_MODE;

// Banner height unit: vh
export const BANNER_HEIGHT = 35;
export const BANNER_HEIGHT_EXTEND = 30;
export const BANNER_HEIGHT_HOME: number = BANNER_HEIGHT + BANNER_HEIGHT_EXTEND;

// The height the main panel overlaps the banner, unit: rem
export const MAIN_PANEL_OVERLAPS_BANNER_HEIGHT = 3.5;

// Page width: rem
export const PAGE_WIDTH = 75;

export const ALL_LANGUAGES = [
	"en",
	"es",
	"id",
	"ja",
	"ko",
	"th",
	"tr",
	"vi",
	"zh-CN",
	"zh-TW",
] as const;

export const DEFAULT_LANG: SupportedLang = "en";

const baseLangs =
	siteConfig.supportedLangs && siteConfig.supportedLangs.length > 0
		? siteConfig.supportedLangs.map(
				(lang) => lang.replace("_", "-") as SupportedLang,
			)
		: [...ALL_LANGUAGES];

const activeConfigLang = siteConfig.lang.replace("_", "-") as SupportedLang;

export const SUPPORTED_LANG: readonly SupportedLang[] = baseLangs.includes(
	activeConfigLang,
)
	? baseLangs
	: [activeConfigLang, ...baseLangs];
