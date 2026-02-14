import { useThemeStore } from "@/store/theme.store"
import twm from "@/utils/twm"
import WorkTitle from "./components/work-title";

export default () => {
    const { colors } = useThemeStore();
    return <div className={twm({
        base: `flex flex-col gap-10`
    })}>
        <WorkTitle colors={colors} location="Dubai / UAE" title="Taif Al Joud Technology L.L.C |  Frontend Developer" year="2024 - 2026" />
        <WorkTitle colors={colors} location="Philippines" title="SparkSoft Solutions |  Full-Stack Developer [ Frontend-Focused ]" year="2021 - 2024" />

    </div>
}

