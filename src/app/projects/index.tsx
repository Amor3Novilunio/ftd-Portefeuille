import Collections from "@/features/projects/collections"
import Hero from "@/features/projects/hero"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
        base: "flex-1 flex flex-col justify-end p-5",
        breakpoints: {
            lg: "lg:p-0"
        }
    })}>
        <Hero />
        <Collections />
    </div>
}
