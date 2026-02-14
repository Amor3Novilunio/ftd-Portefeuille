export default () => {
    const BASE = import.meta.env.BASE_URL;

    return (
        <>
            <a href={`${BASE}`}>Configurations</a>
            <a href={`${BASE}/projects`}>Themes</a>
        </>
    );
};
