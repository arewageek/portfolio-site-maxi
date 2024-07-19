'use client'

import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react"
import { useSwiper } from "swiper/react"

interface Props {
    containerStyles: string,
    btnStyles: string,
    iconStyles: string
}

const WorkSlideBtns = ({ containerStyles, btnStyles, iconStyles }: Props) => {

    const swiper = useSwiper()

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <ArrowLeft className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <ArrowRight className={iconStyles} />
            </button>
        </div>
    )
}

export default WorkSlideBtns