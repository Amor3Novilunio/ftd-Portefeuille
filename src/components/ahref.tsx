import type { ComponentProps } from "@/types/component.types";
import twm from "@/utils/twm";

type AHrefProps = {
  href: string;
  download?: string;
  target: string;
} & ComponentProps;

export default ({
  children,
  className,
  href,
  download,
  target,
}: AHrefProps) => {
  return (
    <a
      target={target}
      href={href}
      download={download ? download : false}
      className={twm({
        base: `cursor-target text-xs flex flex-row gap-2 items-center p-2 px-5 font-montserrat font-semibold even:mx-10`,
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
};
