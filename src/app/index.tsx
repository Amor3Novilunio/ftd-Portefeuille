import twm from "@/utils/twm";
import Routes from "./routes";
import MainMenu from "@/features/navigation/main.menu";
import { useThemeStore } from "@/store/theme.store";
import { useState } from "preact/hooks";
import ProjectsMenu from "@/features/navigation/projects.menu";
import Header from "./header";
import Footer from "./footer";
import TargetCursor from "@/components/react-bits/target-cursor";
import LaserFlow from "@/components/react-bits/laser-flow";

export default function () {
  const { colors } = useThemeStore();
  const [path, setPath] = useState(window.location.pathname);

  const pathIsProject = path.includes("/projects");

  return (
    <div
      className={twm({
        base: `h-dvh flex ${colors.background.primary}`,
      })}
    >
      {/* Content */}
      <div
        className={twm({
          base: `flex-1 flex flex-col z-10`,
        })}
      >
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />

        {/* Header */}
        <Header />

        <section
          className={twm({
            base: "flex-1 flex  flex-row min-h-0 ",
          })}
        >
          {/* Navigation */}
          <nav
            className={twm({
              base: "w-[30%] hidden",
              breakpoints: {
                lg: "lg:flex lg:justify-center lg:items-center lg:min-h-0 lg:overflow-auto",
              },
            })}
          >
            <div
              class={twm({
                base: "flex flex-col ",
                breakpoints: {
                  xl: "xl:gap-2",
                  "2xl": "2xl:gap-5",
                },
              })}
            >
              {!pathIsProject && <MainMenu />}
              {pathIsProject && <ProjectsMenu />}
            </div>
          </nav>

          {/* Children */}
          <main
            className={twm({
              base: "flex-1 min-h-0 flex flex-col overflow-auto scrollbar-thumb-[#232323] scrollbar-thin scrollbar-track-transparent",
            })}
          >
            <Routes path={{ state: path, set: setPath }} />
          </main>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Background */}
      <div
        className={twm({
          base: "flex-1 size-full absolute z-0",
        })}
      >
        <LaserFlow
          className="size-full opacity-50"
          horizontalBeamOffset={-0.24}
          horizontalSizing={1}
          verticalBeamOffset={-0.5}
          falloffStart={0.8}
          color="#96C711"
        />
      </div>
    </div>
  );
}
