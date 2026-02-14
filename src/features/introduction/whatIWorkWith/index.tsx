import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm"
import { ColorMeter, ColorProfeciency } from "./components/color.proficiency";
import { Backend, Frontend, Tools } from "./components/stack.collection";

export default () => {
    const { colors } = useThemeStore();

    return <div className={twm({
        base: "flex flex-col gap-5"
    })}>
        <h2 className={twm({
            base: `font-bitcount border-y-2 border-r-2 border-dotted py-2  text-center ${colors.text.tertiary} w-[40%]`
            , breakpoints: {
                xl: "xl:text-xl",
                "2xl": "2xl:text-2xl"
            }
        })}>
            Tech Stack
        </h2>
        <div className={twm({
            base: `border-l-2 border-b-2 border-dotted pl-5 pb-2 ${colors.text.tertiary} w-[40%]`
        })}>
            <h2 className={twm({
                base: `font-bitcount  ${colors.text.tertiary}`,
                breakpoints: {
                    xl: "xl:text-lg",
                    "2xl": "2xl:text-lg"
                }
            })}>
                Proficiency Meter
            </h2>
            <div class={twm({
                base: "flex flex-row gap-5"
            })}>
                <ColorProfeciency className={{ override: { base: `${colors.text.secondary}` } }} >
                    <ColorMeter className={{ override: { base: "bg-teal-500" } }} />
                    Professional
                </ColorProfeciency>

                <ColorProfeciency className={{ override: { base: `${colors.text.secondary}` } }} >
                    <ColorMeter className={{ override: { base: "bg-yellow-500" } }} />
                    Intermediate
                </ColorProfeciency>

                <ColorProfeciency className={{ override: { base: `${colors.text.secondary}` } }} >
                    <ColorMeter className={{ override: { base: "bg-gray-500" } }} />
                    Learning
                </ColorProfeciency>
            </div>
        </div>
        <div className={twm({
            base: "flex flex-col gap-5"
        })}>
            <Frontend colors={colors} />
            <Backend colors={colors} />
            <Tools colors={colors} />
        </div>

    </div>
}

