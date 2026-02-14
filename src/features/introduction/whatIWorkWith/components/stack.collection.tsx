import SocialIcons from "@/features/introduction/whatIWorkWith/components/social.icons";
import type { ThemeColorsData } from "@/types/theme.types";
import { TbApi, TbBrandAdobePhotoshop, TbBrandCss3, TbBrandFigma, TbBrandGit, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandNodejs, TbBrandReact, TbBrandRust, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { DiJira, DiTrello } from "react-icons/di";
import { SiLinux, SiNginx, SiNixos } from "react-icons/si";
import Stack from "./stack";

export const Frontend = ({ colors }: { colors: ThemeColorsData }) => <Stack colors={colors} title="Frontend ------" >
    <SocialIcons className={{ override: { base: "text-teal-500 " } }} >
        <TbBrandReact />
        <h2 >React | React Native</h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-yellow-500" } }} >
        <TbBrandNextjs />
        <h2 >Next Js </h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-teal-500" } }} >
        <TbBrandTailwind />
        <h2 >Tailwind </h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-teal-500" } }} >
        <TbBrandCss3 />
        <h2 >CSS3 </h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-teal-500" } }}>
        <TbBrandTypescript />
        <h2 >Typescript </h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-teal-500" } }}>
        <TbBrandJavascript />
        <h2 >Javascript </h2>
    </SocialIcons>
</Stack>

export const Backend = ({ colors }: { colors: ThemeColorsData }) => <Stack colors={colors} title="Backend ----" >
    <SocialIcons className={{ override: { base: "text-yellow-500" } }} >
        <TbApi />
        <h2 >Rest API</h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-yellow-500" } }} >
        <TbBrandNodejs />
        <h2 >Node Js</h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-yellow-500" } }} >
        <TbBrandMysql />
        <h2 >MySql</h2>
    </SocialIcons>

    <SocialIcons className={{ override: { base: "text-gray-500" } }} >
        <TbBrandRust />
        <h2 >Rust</h2>
    </SocialIcons>
</Stack>

export const Tools = ({ colors }: { colors: ThemeColorsData }) =>
    <Stack colors={colors} title="Tools --------" >
        <SocialIcons className={{ override: { base: "text-teal-500" } }} >
            <TbBrandGit />
            <h2 >Git</h2>
        </SocialIcons>

        <SocialIcons className={{ override: { base: "text-yellow-500" } }} >
            <TbBrandFigma />
            <h2 >Figma </h2>
        </SocialIcons>

        <SocialIcons className={{ override: { base: "text-teal-500" } }} >
            <TbBrandAdobePhotoshop />
            <h2 >Photoshop </h2>
        </SocialIcons>

        <SocialIcons className={{ override: { base: "text-gray-500" } }} >
            <SiNginx />
            <h2 >Nginx </h2>
        </SocialIcons>

        <SocialIcons className={{ override: { base: "text-yellow-500" } }} >
            <SiLinux />
            <h2 >Linux </h2>
        </SocialIcons>

        <SocialIcons className={{ override: { base: "text-yellow-500" } }} >
            <SiNixos />
            <h2 >NixOS </h2>
        </SocialIcons>

        <SocialIcons className={{ override: { base: "text-teal-500" } }} >
            <DiTrello />
            <h2 >Trello </h2>
        </SocialIcons>

        <SocialIcons className={{ override: { base: "text-teal-500" } }} >
            <DiJira />
            <h2 >Jira </h2>
        </SocialIcons>
    </Stack>

