import Hero from "@/features/introduction/hero"
// import WhatIWorkWith from "@/features/introduction/whatIWorkWith"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
        base: "flex-1 flex flex-col justify-center gap-5"
    })}>
        <Hero />
        {/* <WhatIWorkWith /> */}
    </div>
}
