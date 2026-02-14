import getRepo from "@/services/request/get.repo";
import MasonryInit from "@/features/_components/masonry-init";
import MasonryItems from "@/features/_components/masonry-init/masonry-items";

export default () => {
    const { getBrainDumpMD } = getRepo()

    return <MasonryInit getRequest={getBrainDumpMD()} >
        {data => <MasonryItems payload={data.payload} items={data.masonryItems} />}
    </MasonryInit>
}
