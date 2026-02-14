import type { ThemeColorsData } from "@/types/theme.types";
import twm from "@/utils/twm";
import type { ReactNode } from "preact/compat";

export default ({ children, colors, title }: { children: ReactNode, title: string, colors: ThemeColorsData }) =>
    <div className={twm({ base: " flex flex-col even:px-5" })}>
        <h3 className={twm({
            base: ` font-bitcount py-2  ${colors.text.secondary}`,
            breakpoints: {
                xl: "xl:text-lg",
                "2xl": "2xl:text-xl"
            }
        })}>
            {title}
        </h3>
        <div className={twm({
            base: `flex flex-row flex-wrap gap-5 ${colors.buttonText.secondary} `
        })}>
            {children}
        </div>
    </div >