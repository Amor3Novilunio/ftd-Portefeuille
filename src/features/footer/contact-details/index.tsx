import { useThemeStore } from "@/store/theme.store"
import twm from "@/utils/twm";

export default () => {
    const { colors } = useThemeStore();
    return <div className={twm({
        base: "",
        breakpoints: {
            lg: "lg:text-sm",
            xl: "xl:text-base",
            "2xl": "2xl:text-base"
        }
    })} >
        <h2 className={twm({ base: `${colors.text.tertiary} font-bitcount tracking-widest` })}>Contact Details</h2>
        <h3 className={twm({ base: `${colors.text.secondary} font-semibold font-montserrat` })}>amor.3.novilunio@gmail.com</h3>
    </div>
}