import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";
import type { TargetedMouseEvent } from "preact";
import Match from "preact-router/match";

type LinkProps = {
    href: string,
    title: string,
    onClick?: (e: TargetedMouseEvent<HTMLAnchorElement>) => void
}

export default ({ href, title, onClick }: LinkProps) => {
    const { colors } = useThemeStore();
    return <Match path={href} >
        {({ matches }: { matches: boolean }) => (
            <a
                onClick={onClick}
                href={href}
                className={twm({
                    base: `text-xl py-2 font-bitcount hover:text-white text-center`,
                    breakpoints: {
                        md: "md:text-3xl md:py-5",
                        lg: "lg:text-2xl lg:odd:px-14 lg:py-3 lg:text-left",
                        xl: "xl:text-2xl xl:odd:px-14 xl:py-3",
                        "2xl": "2xl:text-2xl 2xl:odd:px-20 2xl:py-3"
                    },
                    override: { base: matches ? colors.text.tertiary : colors.text.secondary },
                })}
            >
                {title}
            </a>
        )}
    </Match>
}