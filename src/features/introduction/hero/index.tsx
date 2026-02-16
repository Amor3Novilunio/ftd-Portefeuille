import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm"

export default () => {
    const { colors } = useThemeStore();

    return (
      <div
        className={twm({
          base: `flex flex-col justify-center items-center gap-5 font-bitcount tracking-wide`,
          breakpoints: {
            lg: "lg:items-start lg:gap-2",
          },
        })}
      >
        <h2
          className={twm({
            base: `text-base tracking-wide ${colors.text.primary}`,
            breakpoints: {
              md: "md:text-3xl",
              lg: " ",
              xl: " ",
              "2xl": " ",
            },
          })}
        >
          Full Stack Developer
        </h2>

        <h2
          className={twm({
            base: "text-xs font-montserrat flex flex-col gap-1 w-[85%]",
            breakpoints: {
              md: "md:text-lg md:w-[90%]",
              lg: "lg:text-sm lg:w-[80%]",
              xl: "xl:w-[60%]",
              "2xl": " ",
            },
          })}
        >
          <span
            className={twm({
              base: `my-2 font-bold tracking-wide ${colors.text.secondary}`,
            })}
          >
            Systems Thinker | Pragmatic Builder
          </span>
        </h2>
      </div>
    );
}


