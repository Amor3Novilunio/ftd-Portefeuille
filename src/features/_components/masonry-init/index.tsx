import twm from "@/utils/twm";
import { useThemeStore } from "@/store/theme.store";
import RequestHandler from "@/components/request-handler";
import MasonryItems from "./masonry-items";
import type { UseQueryResult } from "@tanstack/react-query";
import { type ReactElement } from "preact/compat";

export default function <T>({ getRequest, children }: {
    getRequest: UseQueryResult<T, Error>,
    children: (data: T) => ReactElement<typeof MasonryItems>
}) {
    const { colors } = useThemeStore();
    const { data, isSuccess } = getRequest;

    return <div className={twm({
        base: "p-5 flex-1 flex flex-col items-start justify-center ",
        breakpoints: {
            "2xl": "2xl:w-[80%]"
        }
    })}>
        {isSuccess && data && children(getRequest.data)}

        <RequestHandler {...getRequest} code403={
            <>
                <div className={twm({ base: `${colors.text.secondary} font-montserrat border-y-4 py-5` })}>
                    <h2>403: Rate Limit Reached</h2>
                    <h3>Please visit the URL below or wait an hour for GitHub's rate limit to reset.</h3>
                    <h4>Visit: <a href="https://github.com/Amor3Novilunio?tab=repositories" target="_blank">https://github.com/Amor3Novilunio?tab=repositories</a></h4>
                </div>
            </>
        } />
    </div>
}
