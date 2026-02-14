import Collection from "@/features/work-experiences/collection"
import Hero from "@/features/work-experiences/hero"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
        base: "flex-1 flex flex-col justify-center gap-10"
    })}>
        <Hero />
        <Collection />
    </div>
}
