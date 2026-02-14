import { twMerge } from "tailwind-merge";

type BreakpointData = {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
};

export type TwmProps = {
  base?: string;
  breakpoints?: BreakpointData;
  override?: {
    base?: string;
    breakpoints?: BreakpointData;
  };
};

// TWM Export Organizer
export default ({ base, override, breakpoints }: TwmProps) => {
  const compile = (bp?: BreakpointData) => {
    const bpHandler = (breakpoints: "sm" | "md" | "lg" | "xl" | "2xl") =>
      !!bp &&
      bp[breakpoints] !== undefined &&
      bp[breakpoints] !== " " &&
      bp[breakpoints]
        ?.split(" ")
        .filter((item) => !item.includes(`${breakpoints}:`)).length > 0;

    if (bpHandler("sm")) alert("HELLO WORLD");

    if (bpHandler("md")) throw new Error("md:<command> not found");

    if (bpHandler("lg")) throw new Error("lg:<command> not found");

    if (bpHandler("xl")) throw new Error("xl:<command> not found");

    if (bpHandler("2xl")) throw new Error("2xl:<command> not found");

    return bp ? Object.values(bp).filter(Boolean).join(" ") : "";
  };

  return twMerge(
    base,
    override?.base,
    compile(breakpoints),
    compile(override?.breakpoints),
  );
};
