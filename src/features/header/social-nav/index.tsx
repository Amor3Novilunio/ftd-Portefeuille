import Ahref from "@/components/ahref";
import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";
import { useState } from "preact/hooks";
import { FaGithub, FaLinkedin, FaScroll } from "react-icons/fa6";
import { TbMessageCircle, TbX } from "react-icons/tb";

export default () => {
  const { colors } = useThemeStore();
  const [social, setSocial] = useState(false);

  const showSocial = () => setSocial(true);
  const hideSocial = () => setSocial(false);

  return (
    <>
      {/* Desktop Social Icons */}
      <div className={twm({ base: "relative" })} onMouseLeave={hideSocial}>
        <button
          className={twm({
            base: `group cursor-target cursor-pointer flex flex-row items-center gap-2 text-white`,
          })}
          onClick={showSocial}
        >
          <h2
            className={twm({
              base: `opacity-0 group-hover:opacity-100 transition-opacity px-2 font-montserrat `,
            })}
          >
            Get in Touch
          </h2>
          <TbMessageCircle
            className={twm({
              base: `text-2xl text-white scale-x-[-1]`,
              breakpoints: {
                md: "md:text-3xl",
              },
            })}
          />
        </button>

        <div
          className={twm({
            base: `${colors.background.primary} ${colors.border.secondary} border-l-2 h-full p-5 fixed right-0 top-0 transition-all duration-300`,
            override: {
              base: social
                ? "w-[25%] opacity-100 z-20"
                : "w-0 opacity-0 z-0 p-0",
            },
          })}
        >
          {/* X */}
          <TbX
            className={twm({
              base: `cursor-target cursor-pointer text-2xl text-white scale-x-[-1] absolute right-5`,
              breakpoints: {
                md: "md:text-3xl",
              },
            })}
            onClick={hideSocial}
          />
          {/* Icons */}
          <div
            className={twm({
              base: "flex flex-col items-start gap-5",
            })}
          >
            {/*  */}
            <Ahref
              target="_"
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
            {/*  */}
            <Ahref
              target="_"
              href="https://www.linkedin.com/in/amor3n/"
              className={{
                override: {
                  base: `text-sky-500`,
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
            {/*  */}
            <Ahref
              target=""
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
                Download Resume
              </span>
            </Ahref>
          </div>
          {/* Contact Details */}
          <div
            className={twm({
              base: "mt-10 flex flex-col justify-center items-center",
            })}
          >
            <h2
              className={twm({
                base: `font-bitcount ${colors.text.primary} tracking-widest text-xl`,
              })}
            >
              Contact Information
            </h2>

            <h2>amor.3.novilunio@gmail.com</h2>
          </div>
          {/*  */}

          <div className={"text-center mt-20"}>
            <h2 className={"font-montserrat text-3xl"}>TBA</h2>
          </div>
        </div>
      </div>
    </>
  );
};
