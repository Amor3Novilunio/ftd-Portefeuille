import type { ThemeButtonProps } from "./types";
import twm from "@/utils/twm";

export default ({
  primary,
  secondary,
  background,
  onClick,
}: ThemeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twm({
        base: `cursor-pointer cursor-target rounded-md flex flex-col overflow-hidden items-start`,
      })}
    >
      <div class={`w-40 h-10 `} style={{ backgroundColor: primary }}></div>
      <div class={`w-40 h-10 `} style={{ backgroundColor: secondary }}></div>
      <div class={`w-40 h-10 `} style={{ backgroundColor: background }}></div>
    </button>
  );
};
