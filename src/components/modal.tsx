import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";
import type { Dispatch, ReactNode } from "preact/compat";
import { useEffect, type StateUpdater } from "preact/hooks";
import { FaX } from "react-icons/fa6";

type ModalProps = {
    modal: {
        state: boolean,
        set: Dispatch<StateUpdater<boolean>>,
    },
    children: ReactNode
}

export default ({ modal, children }: ModalProps) => {
    const { colors } = useThemeStore();
    const hideModal = () => modal.set(false);


    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                hideModal();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []); // empty dependency array ensures listener is added once

    return <div className={twm({
        base: `no-scrollbar hidden inset-0 `, override: {
            base: `${modal.state && "flex items-center justify-center absolute"
                }`
        }
    })}
    >
        {/* OuterLayer */}
        <button onClick={hideModal} className={twm({ base: `absolute inset-0 z-10` })} />
        {/* Inner Layer */}
        <div
            className={twm({
                base: `size-full rounded-lg z-20 ${colors.background.primary} ${colors.border.secondary} border-2 relative`,
                breakpoints: {
                    lg: "lg:size-[95%]",
                }
            })}>
            <button className={twm({
                base: `absolute right-5 top-5 ${colors.buttonText.secondary} text-xl`,
                breakpoints: {
                    md: "md:top-5 md:right-5 md:text-2xl",
                    lg: "lg:top-5 lg:right-5"
                }
            })} onClick={hideModal}>
                <FaX />
            </button>
            {children}
        </div>
    </div>
}