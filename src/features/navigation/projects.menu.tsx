import Links from "./links"

export default () => {
    return <>
        <Links href="/projects" title="Projects" />
        <Links href="/projects/frontend" title="Frontend" />
        <Links href="/projects/backend" title="Backend" />
        <Links href="/projects/tools" title="Tools" />
        <Links href="/" title="Return" />
    </>
}