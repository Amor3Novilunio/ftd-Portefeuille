import OrbitImages from "@/components/react-bits/orbiting-images";
import { useThemeStore } from "@/store/theme.store";

export default () => {
  const {colors} = useThemeStore();
  const base_location = `${import.meta.env.VITE_BASE_URL}/tech-icons`;

  const outerImage = [
    `${base_location}/Tailwind CSS.png`,
    `${base_location}/TypeScript.png`,
    `${base_location}/JavaScript.png`,
    `${base_location}/React.png`,
    `${base_location}/HTML5.png`,
    `${base_location}/CSS3.png`,
  ];

  const innerImage = [
    `${base_location}/Rust.png`,
    `${base_location}/Docker.png`,
    `${base_location}/MySQL.png`,
    `${base_location}/NixOS.png`,
  ];

  return (
    <>
      <div className={"fixed w-[60%] h-full -right-100"}>
        <div className={"absolute size-full top-0"}>
          <OrbitImages
            images={outerImage}
            shape="circle"
            radiusX={500}
            radiusY={160}
            rotation={0}
            duration={30}
            itemSize={120}
            responsive={true}
            radius={500}
            direction="normal"
            fill
            showPath
            pathColor={colors.raw.secondary}
            paused={false}
          />
        </div>

        <div className={"absolute size-full "}>
          <OrbitImages
            images={innerImage}
            shape="circle"
            radiusX={500}
            radiusY={160}
            rotation={0}
            duration={30}
            itemSize={120}
            responsive={true}
            radius={250}
            direction="reverse"
            fill
            showPath
            pathColor={colors.raw.secondary}
            paused={false}
          />
        </div>
      </div>
    </>
  );
};
