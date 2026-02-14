import Links from "./links"

type BurgerProps = {
    modalHandlers: {
        hide: () => void;
    },
}

export default ({ modalHandlers }: BurgerProps) => {
    return <>
        <Links onClick={modalHandlers.hide} href="/" title="Introduction" />
        <Links onClick={modalHandlers.hide} href="/projects" title="Projects" />
        {/* <Links onClick={modalHandlers.hide} href="/work-experiences" title="Work Experiences" /> */}
        <Links onClick={modalHandlers.hide} href="/brain-dump" title="Brain Dump" />
        <Links onClick={modalHandlers.hide} href="/settings" title="Settings" />
    </>
}