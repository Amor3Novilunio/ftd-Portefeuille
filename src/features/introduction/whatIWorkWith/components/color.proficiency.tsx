import type { ComponentProps as ComponentProps } from "@/types/component.types"
import type { TwmProps } from "@/utils/twm"
import twm from "@/utils/twm"

export const ColorProfeciency = ({ children, className }: & ComponentProps) => <div className={twm({
    base: "flex flex-row items-center gap-2 font-montserrat font-semibold tracking-wide", 
    breakpoints: {
        xl: "xl:text-xs",
        "2xl": "2xl:text-sm"
    },
    ...className
})}>
    {children}
</div>

export const ColorMeter = ({ className }: { className: TwmProps }) => <span className={twm({
    base: "h-[0.5rem] px-2 rounded-lg",
    ...className
})} />