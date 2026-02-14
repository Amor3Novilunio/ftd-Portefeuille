import Burger from "@/features/header/burger"
import SocialNav from "@/features/header/social-nav"
import twm from "@/utils/twm"

export default () => {

    return <>
        <div className={twm({
            base: "flex justify-between items-center w-full ",
            breakpoints: {
                sm: "sm:flex sm:justify-end",
                md: "md:flex md:justify-between",
                lg: "lg:flex lg:justify-end lg:p-5",
            }
        })}>
            <SocialNav />
            <Burger />
        </div>
    </>
}
