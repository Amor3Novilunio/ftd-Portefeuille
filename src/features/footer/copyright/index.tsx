import { useThemeStore } from "@/store/theme.store"
import twm from "@/utils/twm";

export default () => {
    const { colors } = useThemeStore();
    return <h2 className={twm({
        base: `${colors.text.tertiary} font-bitcount tracking-wide`,
        breakpoints: {
            lg: "lg:text-xs",
            xl: "xl:text-xs",
            "2xl": "2xl:text-xs"
        }
    })}>© {new Date().getFullYear()} Amor Novilunio III. All rights reserved.</h2>
}