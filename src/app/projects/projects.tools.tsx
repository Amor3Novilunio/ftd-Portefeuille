import Collections from "@/features/projects/projects.tools/collections"
import Hero from "@/features/projects/projects.tools/hero"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
        base: "flex-1 flex flex-col justify-start"
    })}>
        <Hero/>
        <Collections/>
    </div>
}
