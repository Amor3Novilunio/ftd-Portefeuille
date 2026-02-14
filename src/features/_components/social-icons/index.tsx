import Ahref from "@/components/ahref";
import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";
import { FaGithub, FaLinkedin, FaScroll } from "react-icons/fa";

export default () => {
    const { colors } = useThemeStore();

    return <>
        <Ahref href="https://github.com/Amor3Novilunio" className={{ override: { base: `${colors.background.primary} ${colors.buttonText.secondary}` } }}>
            <FaGithub />
            <span class={twm({
                base: "hidden",
                breakpoints: {
                    md: "md:block",
                }
            })}>
                Github
            </span>
        </Ahref>

        <Ahref href="https://www.linkedin.com/in/amor3n/" className={{ override: { base: `${colors.background.tertiary} ${colors.buttonText.primary}` } }}>
            <FaLinkedin />
            <span class={twm({
                base: "hidden",
                breakpoints: {
                    md: "md:block",
                }
            })}>
                LinkedIn
            </span>
        </Ahref>

        <Ahref href="./public/Resume.pdf" download className={{ override: { base: `${colors.background.secondary} ${colors.buttonText.primary}` } }}>
            <FaScroll />
            <span class={twm({
                base: "hidden",
                breakpoints: {
                    md: "md:block",
                }
            })}>
                Download Resume
            </span>
        </Ahref>
    </>
}