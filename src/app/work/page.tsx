"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import WorkSlideBtns from "@/components/WorkSlideBtns"

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'Project 1',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam fuga dolorum, adipisci labore dignissimos",
        stacks: [
            { name: 'React' }, { name: 'Vue' }, { name: 'TailwindCSS' },
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: '',
    },

    {
        num: '02',
        category: 'fullstack',
        title: 'Project 1',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam fuga dolorum, adipisci labore dignissimos",
        stacks: [
            { name: 'React' }, { name: 'PHP' }, { name: 'TailwindCSS' },
        ],
        image: '/assets/work/thumb2.png',
        live: '',
        github: '',
    },

    {
        num: '03',
        category: 'frontend',
        title: 'Project 1',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam fuga dolorum, adipisci labore dignissimos",
        stacks: [
            { name: 'React' }, { name: 'PHP' }, { name: 'TailwindCSS' },
        ],
        image: '/assets/work/thumb3.png',
        live: '',
        github: '',
    },
]

const Work = () => {
    const [work, setWork] = useState(projects[0])

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex

        setWork(projects[currentIndex])
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: .4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex flex-col justify-centerpy-12 xl:px-0"
        >
            <div className="container mx-auto min-h-[80vh] flex flex-col justify-center">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">

                        <div className="py-5 flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {work.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {work.category} Project
                            </h2>

                            <p className="text-white/60">
                                {work.description}
                            </p>

                            <u className="flex gap-4">
                                {
                                    work.stacks.map((item, index) => (
                                        <li key={index} className="text-xl text-accent list-none no-underline decoration-0">
                                            {item.name}
                                            {index !== work.stacks.length - 1 && ","}
                                        </li>
                                    ))
                                }
                            </u>

                            <div className="border border-white/20">

                            </div>

                            <div className="flex gap-4 items-center">
                                <Link href={work.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <ArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-accent text-primary border-none">
                                                <p>
                                                    Live Project
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={work.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <Github className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-accent text-primary border-none">
                                                <p>
                                                    Github Project
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div>
                                            <Image src={project.image} fill className="object-cover" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            <WorkSlideBtns
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconStyles=""
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work