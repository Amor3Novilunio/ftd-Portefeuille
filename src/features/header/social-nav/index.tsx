import SocialIcons from "@/features/_components/social-icons"
import twm from "@/utils/twm"

export default () => {
    return <div className={twm({
            base: "flex flex-row gap-5 px-5",
            breakpoints:{
                md:"md:px-0"
            }
        })}>
        <SocialIcons />
    </div>
}