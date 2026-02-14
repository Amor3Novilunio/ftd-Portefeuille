import theme from "@/constants/theme";
import type { ThemeColorsData, ThemeKeyData } from "@/types/theme.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type States = {
    colors: ThemeColorsData;
    theme: ThemeKeyData;
};

type Actions = {};

export const useThemeStore =
    create<States & Actions>()(
        persist(
            (_set, _get) => {
                const defaultTheme: ThemeKeyData = "default";

                return {
                    colors: theme[defaultTheme],
                    theme: defaultTheme,
                };
            },
            {
                name: "theme",
                storage: createJSONStorage(() => localStorage),
            }
        )
    );
