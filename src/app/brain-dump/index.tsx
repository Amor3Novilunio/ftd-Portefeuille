import Collections from "@/features/brain-dump/collections"
import Hero from "@/features/brain-dump/hero"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
        base: "flex-1 flex flex-col justify-end p-5",
        breakpoints:{
            lg: "lg:p-10"
        }
    })}>
        <Hero/>
        <Collections/>
    </div>
}
