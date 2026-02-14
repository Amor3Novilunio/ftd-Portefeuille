import type { ThemeColorsData } from "@/types/theme.types";
import twm from "@/utils/twm";

type WorkTitleProps = {
    colors: ThemeColorsData;
    title: string,
    location: string
    year: string
}

export default ({ colors, location, title, year }: WorkTitleProps) => <div className={twm({ base: `flex flex-row justify-between items-end w-[80%] text-2xl font-bitcount ${colors.text.tertiary} border-b-2 py-5` })}>
    <div className={twm({ base: "flex flex-col" })}>
        <h2 className={twm({})}>{title}</h2>
        <h2 className={twm({ base: `text-xl  ${colors.text.secondary}` })}>
            {location}
        </h2>
    </div>
    <h2 className={twm({})}>{year}</h2>
</div>