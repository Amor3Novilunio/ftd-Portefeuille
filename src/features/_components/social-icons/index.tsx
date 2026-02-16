import Ahref from "@/components/ahref";
import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";
import { FaGithub, FaLinkedin, FaScroll } from "react-icons/fa";

export default () => {
  const { colors } = useThemeStore();

  return (
    <>
      <Ahref
        href={`https://github.com/${import.meta.env.VITE_GITHUB_USER}`}
        className={{
          override: {
            base: `text-white`,
          },
        }}
      >
        <FaGithub />
        <span
          class={twm({
            base: "hidden",
            breakpoints: {
              md: "md:block",
            },
          })}
        >
          Github
        </span>
      </Ahref>

      <Ahref
        href="https://www.linkedin.com/in/amor3n/"
        className={{
          override: {
            base: `${colors.buttonText.primary}`,
          },
        }}
      >
        <FaLinkedin />
        <span
          class={twm({
            base: "hidden",
            breakpoints: {
              md: "md:block",
            },
          })}
        >
          LinkedIn
        </span>
      </Ahref>

      <Ahref
        href="./public/Resume.pdf"
        download={"Resume_[Amor_Novilunio_III].pdf"}
        className={{
          override: {
            base: `${colors.text.secondary}`,
          },
        }}
      >
        <FaScroll />
        <span
          class={twm({
            base: "hidden",
            breakpoints: {
              md: "md:block",
            },
          })}
        >
          Resume
        </span>
      </Ahref>
    </>
  );
};
