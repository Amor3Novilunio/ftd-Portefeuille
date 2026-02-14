import type { TwmProps } from "@/utils/twm";
import type { ReactNode } from "preact/compat";

export type ComponentProps = {
  className?: TwmProps;
  children: ReactNode;
};
