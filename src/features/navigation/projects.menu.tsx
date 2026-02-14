import Links from "../../components/links";

export default () => {
    const BASE = import.meta.env.BASE_URL;

    return (
        <>
            <Links href={`${BASE}/projects`} title="Projects" />
            <Links href={`${BASE}/projects/frontend`} title="Frontend" />
            <Links href={`${BASE}/projects/backend`} title="Backend" />
            <Links href={`${BASE}/projects/tools`} title="Tools" />
            <Links href={`${BASE}`} title="Return" />
        </>
    );
};
