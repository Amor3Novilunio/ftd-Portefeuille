import ThemeSelection from "@/features/settings/theme-selection";
import twm from "@/utils/twm";

export default () => {
  return (
    <div
      className={twm({
        base: "flex-1 flex flex-col justify-start gap-5",
      })}
    >
      <ThemeSelection/>
    </div>
  );
};
