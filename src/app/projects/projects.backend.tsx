import Collections from "@/features/projects/projects.backend/collections"
import Hero from "@/features/projects/projects.backend/hero"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
        base: "flex-1 flex flex-col justify-start"
    })}>
        <Hero/>
        <Collections/>
    </div>
}
