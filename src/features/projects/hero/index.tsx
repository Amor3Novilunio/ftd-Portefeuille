import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";

export default () => {
  const { colors } = useThemeStore();

  return (
    <div
      className={twm({
        base: `flex flex-col gap-2 px-5 font-bitcount tracking-wide ${colors.text.secondary}`,
        breakpoints: {
          md: "md:px-0",
        },
      })}
    >
      <h2
        className={twm({
          base: `text-2xl tracking-widest ${colors.text.tertiary}`,
          breakpoints: {
            md: "md:text-3xl",
            lg: " ",
            xl: "xl:text-3xl",
            "2xl": "2xl:text-3xl",
          },
        })}
      >
        Greetings, Human
      </h2>

      <h2
        className={twm({
          base: "text-xs tracking-widest",
          breakpoints: {
            md: "md:text-sm",
            lg: " ",
            xl: "xl:text-xs",
            "2xl": "2xl:text-xs",
          },
        })}
      >
        Thou hast entered my domain
        <br />
        I am Amor, and I bid thee welcome
        <br />
        Look on my works, ye Mighty, and despair!
      </h2>

      <h4
        className={twm({
          base: `text-xs ${colors.text.tertiary}`,
          breakpoints: {
            md: "md:text-sm",
            lg: " ",
            xl: "xl:text-xs",
            "2xl": "2xl:text-xs",
          },
        })}
      >
        — Percy Bysshe Shelley
      </h4>
    </div>
  );
};
