"use client"

import { Bolt, Code, Group, ListCheck, LucideLink } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
// import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { TooltipContent } from "@radix-ui/react-tooltip"

const about = {
    title: 'About me',
    description: "I'm a Collab Manager with vast Experience in the Space , I would love to impart my skills in your project , and help make your project a huge Success.",
    info: [
        {
            name: "Name",
            val: "Cudy"
        },
        {
            name: "Phone",
            val: "+234-703-803-7382"
        },
        {
            name: "Email",
            val: "cudynd34@gmail.com"
        },
        {
            name: "Experience",
            val: "1+ Years"
        },
        {
            name: "Discord",
            val: "@cudyweb3"
        },
        {
            name: "Nationality",
            val: "Nigerian"
        },
        {
            name: "Freelance",
            val: "Available"
        },
        {
            name: 'Languages',
            val: 'English'
        }
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "I've contributed to many community based projects, worked with a couple of them, and have helped this communities gain valuable attention and support",
    items: [
        {
            company: "Gutzy",
            position: "Collab Manager",
            duration: "2022 - 2023",
        },
        {
            company: "Icons Lab",
            position: "Collab Manager",
            duration: "2021 - 2022",
        },
        {
            company: "Momo Guru",
            position: "Collab Manager",
            duration: "2023 - 2024",
        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Spending valuable time in this esteemed institution has helped me gain valuable experiences and build on my work ethics",
    items: [
        {
            institution: "Federal University of Technology Owerri",
            degree: "Mechanical Engineering.",
            duration: "2023",
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "Being a person that invests a lot into his learning, I have poured a lot of energy into acquiring valuable skills for my niche",
    skillset: [
        {
            icon: <ListCheck />,
            name: "Multitasking"
        },

        {
            icon: <Group />,
            name: "Team Work"
        },

        {
            icon: <Bolt />,
            name: "Hard Work"
        },

        {
            icon: <LucideLink />,
            name: "Collabs"
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    delay: 2.4, duration: .4, ease: 'easeIn'
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="resume">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full container">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[500px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((exp, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{exp.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{exp.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{exp.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full container">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[500px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((exp, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{exp.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{exp.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{exp.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full container h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {skills.skillset.map((skill, _) => (
                                        <li key={_} className="bg-[#232329] h-[104px] py-6 px-10 rounded-xl flex flex-col justify-center items-center w-full lg:items-start gap-1">
                                            <span className="text-accent">{skill.icon}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left flex flex-col items-center justify-center">{skill.name}</h3>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="resume" className="w-full container text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 xl:mx-0 mx-auto">
                                    {about.description}
                                </p>
                                <ul className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((info, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">
                                                {info.name}
                                            </span>
                                            <span>{info.val}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume