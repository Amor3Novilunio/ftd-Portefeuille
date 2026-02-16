import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";

export default () => {
  const { colors } = useThemeStore();

  return (
    <div
      className={twm({
        base: `flex flex-col justify-center gap-5 font-bitcount tracking-wide `,
      })}
    >
      <h2
        className={twm({
          base: `text-3xl tracking-widest ${colors.text.primary}`,
        })}
      >
        Here lies thy Tools
      </h2>
    </div>
  );
};
