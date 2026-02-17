import theme from "@/constants/theme";
import type { ThemeColorsData, ThemeKeyData } from "@/types/theme.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type States = {
  colors: ThemeColorsData;
  theme: ThemeKeyData;
};

type Actions = {
  setTheme: (newTheme: ThemeKeyData) => void;
};

export const useThemeStore = create<States & Actions>()(
  persist(
    (_set, _get) => {
      const defaultTheme: ThemeKeyData = "default";

      return {
        colors: theme[defaultTheme],
        theme: defaultTheme,
        setTheme(_theme) {
          _set({ theme: _theme, colors: theme[_theme] });
        },
      };
    },
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
