import Copyright from "@/features/footer/copyright"
import twm from "@/utils/twm"

export default () => {
    return <>
        <div className={twm({
            base: "hidden justify-between items-end p-10",
            breakpoints: {
                sm: "sm:hidden",
                md: "md:hidden",
                lg: "lg:flex",
            }
        })}>

            <Copyright />
        </div>
    </>
}
