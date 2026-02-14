import type { ComponentProps } from "@/types/component.types"
import twm from "@/utils/twm"

type socialIconsProps = {
} & ComponentProps


export default ({ children, className }: socialIconsProps) => {
    return <div className={twm({
        base: `flex flex-row items-center gap-2 text-xl font-montserrat italic ml-5`,
        breakpoints: {
            xl: "xl:text-base",
            "2xl": "2xl:text-lg"
        },
        ...className
    })}>
        {children}
    </div>
}