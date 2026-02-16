import SocialIcons from "@/features/_components/social-icons";
import twm from "@/utils/twm";

export default () => {
  return (
    <div
      className={twm({
        base: "flex flex-row gap-1 mx-5",
        breakpoints: {},
      })}
    >
      <SocialIcons />
    </div>
  );
};
