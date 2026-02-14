import { useThemeStore } from "@/store/theme.store"
import twm from "@/utils/twm"

export default () => {
    const { colors } = useThemeStore();
    return <div className={twm({
        base: `flex flex-col gap-2`
    })}>
        <h2 className={twm({
            base: `text-3xl ${colors.text.tertiary} font-bitcount`
        })}>Professional Summary</h2>

        <div className={twm({
            base: `text-base ${colors.text.secondary} font-montserrat flex flex-col gap-5 w-[50%] text-justify`
        })}>
            <p>Frontend Developer with 4+ years of experience building production web applications using React, Next.js, and TypeScript.</p>

            <p>
                Focused on scalable architecture, component-driven development, and robust integration with backend systems while collaborating closely with cross-functional teams.
            </p>
        </div>

    </div>
}