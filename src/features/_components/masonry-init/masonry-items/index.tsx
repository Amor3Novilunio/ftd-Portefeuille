import Modal from "@/components/modal";
import type { Item } from "@/components/react-bits/masonry";
import Masonry from "@/components/react-bits/masonry";
import { repoName } from "@/utils/fns";
import { useState } from "preact/hooks";
import twm from "@/utils/twm";
import getRaw from "@/services/request/get.raw";
import CircularText from "@/components/react-bits/circular.text";
import Markdown from 'markdown-to-jsx';
import 'github-markdown-css/github-markdown.css';
import { useThemeStore } from "@/store/theme.store";
import type { MasonryItemsProps, PayloadCollectionData } from "./types";


export default ({ items, payload }: MasonryItemsProps) => {
    const { colors } = useThemeStore();
    const { getReadme } = getRaw();
    const [modal, setModal] = useState(false);
    const [payloadCollection, setPayloadCollection] = useState<PayloadCollectionData | undefined>(undefined);

    const getItemHandler = (item: Item) => {
        setModal(!modal)

        const collection = payload.filter(payload => payload.id == item.id)[0];

        setPayloadCollection({
            repo: `${collection.repo}`,
            title: `${collection.name}`,
            htmlUrl: `${collection.html_url}`,
            mdFile: `${collection.mdFile}`
        })
    }

    const { data, isSuccess, isLoading, isError, error } = getReadme({ repo: payloadCollection?.repo, mdName: payloadCollection?.mdFile });

    return <>
        <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={true}
            getItemData={getItemHandler}
        />

        <Modal
            key={modal ? payloadCollection?.repo : 'closed'}  // Different key when closed
            modal={{ state: modal, set: setModal }}>
            {isError && <h2>Collection not Found Please try again later</h2>}

            {isError && <>
                {error.message.includes("404") && <div className={twm({ base: `flex flex-col gap-5 p-5 items-start ${colors.text.secondary}` })}>
                    <h2>404: Readme.md Not Found</h2>
                    <h3>Either a new Repository or README.md is missing for more information</h3>
                    <a target={"_blank"} href={payloadCollection?.htmlUrl} className={twm({ base: `ml-5 font-montserrat text-lg py-1 px-5 rounded-lg ${colors.background.tertiary} ${colors.buttonText.primary}` })}>{"Open Repository"}</a>
                </div>}
            </>}

            {isLoading &&
                <div className={"size-full flex items-center justify-center"}>
                    <CircularText
                        className="font-bitcount font-normal"
                        text="LOADING.-.LOADING.-."
                        spinDuration={8}
                        onHover="speedUp"
                    />
                </div>
            }

            {isSuccess && data && payloadCollection && <>
                <div className={twm({ base: `size-full flex flex-col items-start p-5 gap-2 ${colors.text.secondary}` })}>
                    <div className={twm({ base: "flex flex-col gap-5 items-start border-b-2" })}>
                        <a target={"_blank"} href={payloadCollection.htmlUrl}
                            className={twm({
                                base: `font-montserrat text-sm py-1 px-5 rounded-lg font-semibold ${colors.background.tertiary} ${colors.buttonText.primary}`,
                                breakpoints: {
                                    md: "md:text-base md:ml-5",
                                    lg: "lg:text-lg"
                                }
                            })}>
                            Open Repository
                        </a>
                        <h2 className={twm({
                            base: "font-bitcount text-base",
                            breakpoints: {
                                md: "md:text-xl",
                                lg: "lg:text-2xl",
                            }

                        })}>{repoName(payloadCollection.title)} - MARKDOWN</h2>
                    </div>

                    <div className={twm({
                        base: `text-[0.5rem]! flex-1 flex markdown-body bg-transparent! overflow-auto p-2 *:font-montserrat max-w-full box-border`, breakpoints: {
                            md: "md:text-[0.7rem]!",
                            lg: "lg:text-[1rem]!",
                        }
                    })}>
                        <Markdown>{data.payload}</Markdown>
                    </div>
                </div>
            </>}
        </Modal>
    </>
}
