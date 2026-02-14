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
    return <Router onChange={route => path.set(route.url)}>
        <Route path="" component={Introduction} />
        <Route path="projects" component={Projects} />
        <Route path="projects/frontend" component={Frontend} />
        <Route path="projects/backend" component={Backend} />
        <Route path="projects/tools" component={Tools} />
        <Route path="work-experiences" component={WorkExperiences} />
        <Route path="brain-dump" component={BrainDump} />
        <Route path="settings" component={Settings} />
    </Router>
}