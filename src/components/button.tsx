import type { ComponentProps } from "@/types/component.types"
import twm from "@/utils/twm"

type ButtonProps = {
} & ComponentProps

export default ({ children, className }: ButtonProps) => {
    return (
      <button
        className={twm({
          base: `cursor-target text-xs flex flex-row gap-2 items-center rounded-md p-2 px-5 font-montserrat font-[600] `,
          breakpoints: {
            lg: "lg:text-sm",
            xl: "xl:text-base",
            "2xl": "2xl:text-base",
          },
          ...className,
        })}
      >
        {children}
      </button>
    );
}