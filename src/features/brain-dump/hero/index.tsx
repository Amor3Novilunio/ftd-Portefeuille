import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm"

export default () => {
    const { colors } = useThemeStore();

    return <div
        className={twm({
            base: `flex flex-col gap-2 px-5 font-bitcount tracking-wide ${colors.text.secondary}`,
            breakpoints: {
                md: "md:px-0"
            }
        })}
    >
        <h2 className={twm({
            base: `text-2xl tracking-widest ${colors.text.tertiary}`,
            breakpoints: {
                md: "md:text-3xl",
                lg: " ",
                xl: "xl:text-5xl",
                "2xl": " "
            }
        })}>
            A quiet life… or a blaze of glory.
        </h2>

        <h2
            className={twm({
                base: "text-xs tracking-widest",
                breakpoints: {
                    md: "md:text-sm",
                    lg: " ",
                    xl: "xl:text-base",
                    "2xl": " "
                }
            })}
        >
            Choose how your ideas burn.
        </h2>

    </div>
}


