import type { ComponentProps } from "@/types/component.types"
import twm from "@/utils/twm"

type AHrefProps = {
    href: string,
    download?: boolean
} & ComponentProps

export default ({ children, className, href, download }: AHrefProps) => {
    return (
      <a
        href={href}
        download={download ? "Resume_[Amor_Novilunio_III].pdf" : false}
        className={twm({
          base: `cursor-target text-xs flex flex-row gap-2 items-center rounded-md p-2 px-5 font-montserrat font-[600] `,
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