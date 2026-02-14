import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm"

export default () => {
    const { colors } = useThemeStore();

    return <div
        className={twm({
            base: `flex flex-col justify-center items-center gap-5 font-bitcount tracking-wide ${colors.text.secondary}`,
            breakpoints: {
                lg: "lg:items-start lg:gap-2",
            }
        })}
    >
        <h2 className={twm({
            base: `text-base tracking-wide ${colors.text.tertiary}`,
            breakpoints: {
                md: "md:text-3xl",
                lg: "lg:text-3xl",
                xl: "xl:text-3xl",
                "2xl": "2xl:text-5xl"
            }
        })}>
            Software Developer / Full Stack Engineer
        </h2>

        <h2
            className={twm({
                base: "text-xs font-montserrat flex flex-col gap-1 w-[85%]",
                breakpoints: {
                    md: "md:text-lg md:w-[90%]",
                    lg: "lg:text-sm lg:w-[80%]",
                    xl: "xl:text-sm xl:w-[60%]",
                    "2xl": "2xl:text-base 2xl:w-[60%]"
                }
            })}
        >I build frontend applications with a systems mindset, clean architecture, pragmatic trade-offs.
            <span className={twm({ base: "my-2" })}>
                Fast learner. Systems thinker. Pragmatic builder.
            </span>
        </h2>

        <h4
            className={twm({
                base: "text-xs w-[80%]",
                breakpoints: {
                    md: "md:text-xs",
                    lg: "lg:text-sm",
                    xl: "xl:text-sm",
                    "2xl": "2xl:text-sm"
                }
            })}
        >
            - Amor Novilunio III
        </h4>
    </div>
}


