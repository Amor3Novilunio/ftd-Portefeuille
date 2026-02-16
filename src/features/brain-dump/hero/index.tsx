import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm"

export default () => {
    const { colors } = useThemeStore();

    return (
      <div
        className={twm({
          base: `flex flex-col gap-2 px-5 font-bitcount tracking-wide`,
          breakpoints: {
            md: "md:px-0",
          },
        })}
      >
        <h2
          className={twm({
            base: `text-2xl tracking-widest ${colors.text.primary}`,
            breakpoints: {
              md: "md:text-3xl",
              lg: " ",
              xl: "xl:text-3xl",
              "2xl": "2xl:text-3xl",
            },
          })}
        >
          A quiet life… or a blaze of glory.
        </h2>

        <h2
          className={twm({
            base: `text-xs tracking-widest ${colors.text.secondary}`,
            breakpoints: {
              md: "md:text-sm",
              lg: " ",
              xl: "xl:text-xs",
              "2xl": "2xl:text-xs",
            },
          })}
        >
          Choose how your ideas burn.
        </h2>
      </div>
    );
}


