import theme from "@/constants/theme";

export type ThemeKeyData = keyof typeof theme;
export type ThemeColorsData = (typeof theme)[ThemeKeyData];
