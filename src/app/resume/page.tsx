"use client"

import { Code } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipContent } from "@radix-ui/react-tooltip"

const about = {
    title: 'About me',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestiae sunt voluptatibus reiciendis libero",
    info: [
        {
            name: "Name",
            val: "Samuel Obed Kpadji"
        },
        {
            name: "Phone",
            val: "+234 814-334-7721"
        },
        {
            name: "Email",
            val: "kpadjisamuel@gmail.com"
        },
        {
            name: "Experience",
            val: "6+ Years"
        },
        {
            name: "Discord",
            val: "@Exokoz"
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
            val: ' English, Hausa'
        }
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "I’m a well versed Defi expert  - I advice projects and bring their real worth",
    items: [
        {
            company: "$PUTON",
            position: "Raider",
            duration: "2024",
        },
        {
            company: "Solcoon",
            position: "Project Advisor",
            duration: "2024",
        },
        {
            company: "$GENA",
            position: "Community Moderator",
            duration: "2024",
        },
        {
            company: "$NELLY",
            position: "Raider",
            duration: "2024",
        },
        {
            company: "$MERICA",
            position: "project advisor",
            duration: "2024",
        },
        {
            company: "$MCD",
            position: "Shiller",
            duration: "2024",
        },
        {
            company: "$HOMER",
            position: "Shiller",
            duration: "2024",
        },
        {
            company: "$ROSAI",
            position: "Community Moderator",
            duration: "2022",
        },
        {
            company: "$IBIT",
            position: "Shiller",
            duration: "2022",
        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam eos aut id facere mollitia, pariatur amet! In, aliquid minus repellat dicta non sed culpa possimus vel ",
    items: [
        {
            institution: "Nasarawa State University, Keffi",
            degree: "BSC computer science",
            duration: "2018 - 2024",
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia blanditiis vero fuga fugit tenetur earum culpa aut ea voluptates reiciendis hic",
    skillset: [
        {
            icon: <Code />,
            name: "React"
        },

        {
            icon: <Code />,
            name: "React"
        },

        {
            icon: <Code />,
            name: "React"
        },

        {
            icon: <Code />,
            name: "React"
        },
        {
            icon: <Code />,
            name: "React"
        },

        {
            icon: <Code />,
            name: "React"
        },

        {
            icon: <Code />,
            name: "React"
        },

        {
            icon: <Code />,
            name: "React"
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
                        {/* <TabsTrigger value="skills">Skills</TabsTrigger> */}
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
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skillset.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent duration-30 transition-all ">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">
                                                            {skill.name}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="resume" className="w-full container text-center xl:text-left">
                            <div>
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