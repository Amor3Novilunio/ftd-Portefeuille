import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";

export default () => {
  const { colors } = useThemeStore();

  return (
    <div
      className={twm({
        base: `flex flex-col justify-center gap-5 font-bitcount tracking-wide ${colors.text.secondary}`,
      })}
    >
      <h2
        className={twm({
          base: `text-3xl tracking-widest ${colors.text.tertiary}`,
        })}
      >
        Here lies thy Tools
      </h2>
      <h4
        className={twm({
          base: "text-sm",
          breakpoints: {
            "2xl": "2xl:text-xs",
          },
        })}
      >
        - Amor Novilunio III
      </h4>
    </div>
  );
};
