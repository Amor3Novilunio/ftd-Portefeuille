import Links from "../../components/links";

type BurgerProps = {
    modalHandlers: {
        hide: () => void;
    };
};

export default ({ modalHandlers }: BurgerProps) => {
    const BASE = import.meta.env.BASE_URL;

    return (
        <>
            <Links onClick={modalHandlers.hide} href={`${BASE}`} title="Introduction" />
            <Links onClick={modalHandlers.hide} href={`${BASE}/projects`} title="Projects" />
            {/* <Links onClick={modalHandlers.hide} href={`${BASE}/work-experiences`} title="Work Experiences" /> */}
            <Links onClick={modalHandlers.hide} href={`${BASE}/brain-dump`} title="Brain Dump" />
            <Links onClick={modalHandlers.hide} href={`${BASE}/settings`} title="Settings" />
        </>
    );
};
