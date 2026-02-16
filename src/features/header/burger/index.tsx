import Modal from "@/components/modal";
import BurgerMenu from "@/features/navigation/burger.menu";
import { useThemeStore } from "@/store/theme.store"
import twm from "@/utils/twm"
import { useState } from "preact/hooks";
import { TbMenu2 } from "react-icons/tb";

export default () => {
    const { colors } = useThemeStore();

    const [modal, setModal] = useState(false);

    const onClickHandler = () => setModal(true);
    const hideModal = () => setModal(false);

    return <div className={twm({
        base: "m-5 block",
        breakpoints: {
            lg: "lg:hidden"
        }
    })}>
        <TbMenu2 className={twm({
            base: `text-2xl text-white`,
            breakpoints: {
                md: "md:text-3xl"
            }
        })} onClick={onClickHandler} />
        <Modal modal={{ state: modal, set: setModal }}>
            <div className={twm({ base: "size-full flex flex-col gap-5 align-center justify-center " })}>
                <BurgerMenu modalHandlers={{ hide: hideModal }} />
            </div>
        </Modal>
    </div>
}