import ThemeButton from "@/features/_components/theme-button";
import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";

export default () => {
  const { setTheme } = useThemeStore();

  const themeHandlerDefault = () => setTheme("default");
  const themeHandlerCyberPunk = () => setTheme("cyberpunk");

  return (
    <div
      className={twm({
        base: "flex-1 flex flex-col justify-start gap-5",
      })}
    >
      <h2 className={"text-3xl font-bitcount text-white tracking-widest"}>
        Themes
      </h2>
      <div class={twm({ base: "flex flex-row flex-wrap gap-5 " })}>
        <ThemeButton
          onClick={themeHandlerDefault}
          primary="#24788f"
          secondary="#96c711"
          background="#0d0d0d"
        />

        <ThemeButton
          onClick={themeHandlerCyberPunk}
          primary="#ff006e"
          secondary="#00f5ff"
          background="#232323"
        />
      </div>
    </div>
  );
};
