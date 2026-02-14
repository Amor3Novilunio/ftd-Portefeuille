import twm from "@/utils/twm";
import Routes from "./routes";
import MainMenu from "@/features/navigation/main.menu";
import { useThemeStore } from "@/store/theme.store";
import { useState } from "preact/hooks";
import ProjectsMenu from "@/features/navigation/projects.menu";
import PixelBlast from "@/components/react-bits/pixel.blast";
import Header from "./header";
import Footer from "./footer";

export default function () {
  const { colors } = useThemeStore();
  const [path, setPath] = useState(window.location.pathname);

  const pathIsProject = path.includes("/projects")

  return (
    <div className={twm({
      base: `h-dvh flex ${colors.background.primary} `
    })}>
      <div
        className={twm({
          base: `flex-1 flex flex-col z-99`,
        })}
      >

        {/* Header */}
        <Header />

        <section className={twm({
          base: "flex-1 flex  flex-row min-h-0 ",
        })}>
          {/* Navigation */}
          <nav className={twm({
            base: "w-[30%] hidden",
            breakpoints: {
              lg: "lg:flex lg:justify-center lg:items-center lg:min-h-0 lg:overflow-auto",
            }
          })}>
            <div class={twm({
              base: "flex flex-col items-start",
              breakpoints: {
                xl: "xl:gap-2",
                "2xl": "2xl:gap-5"
              }
            })}>
              {!pathIsProject && <MainMenu />}
              {pathIsProject && <ProjectsMenu />}
            </div>
          </nav>

          {/* Children */}
          <main className={twm({
            base: "flex-1 min-h-0 flex flex-col overflow-auto",
          })}>
            <Routes path={{ state: path, set: setPath, }} />
          </main>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Background */}
      <div className={twm({ base: "flex-1 size-full absolute z-0 opacity-70" })}>
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#232323"
          patternScale={1}
          patternDensity={0.75}
          pixelSizeJitter={0.05}
          enableRipples={false}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0}
          transparent
        />
      </div>
    </div>
  );
}
