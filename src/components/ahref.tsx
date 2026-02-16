import type { ComponentProps } from "@/types/component.types"
import twm from "@/utils/twm"

type AHrefProps = {
    href: string,
    download?: string
} & ComponentProps

export default ({ children, className, href, download }: AHrefProps) => {
    return (
      <a
        href={href}
        download={download ? download : false}
        className={twm({
          base: `cursor-target text-xs flex flex-row gap-2 items-center p-2 px-5 font-montserrat font-[600] border-y-2`,
          breakpoints: {
            lg: "lg:text-xs",
            xl: "xl:text-sm",
            "2xl": "2xl:text-sm",
          },
          ...className,
        })}
      >
        {children}
      </a>
    );
}