import Links from "./links";

export default () => {
    const BASE = import.meta.env.BASE_URL;

    return (
        <>
            <Links href={`${BASE}`} title="Introduction" />
            <Links href={`${BASE}/projects`} title="Projects" />
            <Links href={`${BASE}/work-experiences`} title="Work Experiences" />
            <Links href={`${BASE}/brain-dump`} title="Brain Dump" />
            <Links href={`${BASE}/settings`} title="Settings" />
        </>
    );
};
