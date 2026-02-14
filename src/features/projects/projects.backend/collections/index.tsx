import getRepo from "@/services/request/get.repo";
import MasonryInit from "@/features/_components/masonry-init";
import MasonryItems from "@/features/_components/masonry-init/masonry-items";

export default () => {
    const { getCollection } = getRepo()

    return <MasonryInit getRequest={getCollection()} >
        {data => <MasonryItems payload={data.payload} items={data.masonryItems.filter((item) =>
            item.title.includes("bkd"),
        )} />}
    </MasonryInit>
}
