import Collections from "@/features/projects/projects.frontend/collections"
import Hero from "@/features/projects/projects.frontend/hero"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
        base: "flex-1 flex flex-col justify-start"
    })}>
        <Hero/>
        <Collections/>
    </div>
}
