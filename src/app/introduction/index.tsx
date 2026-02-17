import Hero from "@/features/introduction/hero";
import StackRotation from "@/features/introduction/stack-rotation";
import twm from "@/utils/twm";

export default () => {
  return (
    <div
      className={twm({
        base: "flex-1 flex flex-col justify-start gap-5",
      })}
    >
      <Hero />
      <span className={"text-5xl font-montserrat text-white tracking-widest"}>
        TBA
      </span>
      {/* <WhatIWorkWith /> */}
      <StackRotation />
    </div>
  );
};
