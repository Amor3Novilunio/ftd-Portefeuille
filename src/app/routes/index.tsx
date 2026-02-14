import { Route, Router } from "preact-router";
import Introduction from "../introduction";
import Projects from "../projects";
import Settings from "../settings";
import type { Dispatch, StateUpdater } from "preact/hooks";
import WorkExperiences from "../work-experiences/work-experiences";
import Frontend from "../projects/projects.frontend";
import Backend from "../projects/projects.backend";
import Tools from "../projects/projects.tools";
import BrainDump from "../brain-dump";

type RouterProps = {
    path: {
        state: string,
        set: Dispatch<StateUpdater<string>>
    }
}


export default ({ path }: RouterProps) => {
    const BASE = import.meta.env.BASE_URL;

    return <Router onChange={route => path.set(route.url)}>
        <Route path={`${BASE}`} component={Introduction} />
        <Route path={`${BASE}/projects`} component={Projects} />
        <Route path={`${BASE}/projects/frontend`} component={Frontend} />
        <Route path={`${BASE}/projects/backend`} component={Backend} />
        <Route path={`${BASE}/projects/tools`} component={Tools} />
        <Route path={`${BASE}/work-experiences`} component={WorkExperiences} />
        <Route path={`${BASE}/brain-dump`} component={BrainDump} />
        <Route path={`${BASE}/settings`} component={Settings} />
    </Router>
}