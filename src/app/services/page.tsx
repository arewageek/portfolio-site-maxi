"use client"
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
    { num: '01', title: 'Organize Collaborations', description: 'Oversee and execute joint projects, campaigns, and initiatives to drive mutual growth and community engagement.', href: '#' },
    { num: '02', title: 'Build Partnerships', description: 'Searching for and establishing strategic partnerships with complementary NFT or Web3 projects. This involves identifying potential synergies, negotiating terms, and drafting partnership agreements.', href: '#' },
    { num: '03', title: 'Plan and Execute Collabs', description: 'Developing and implementing joint marketing campaigns, giveaways, and other collaborative initiatives to engage communities and drive mutual growth.', href: '#' },
    { num: '04', title: 'Manage & Growth Community', description: 'Fostering a strong and engaged community through collaborative efforts, such as cross-promotions, joint events, and shared content.', href: '#' },
    { num: '05', title: 'Relationship Management', description: 'Building and maintaining strong relationships with partner projects, ensuring smooth collaboration and resolving any issues that may arise.', href: '#' },
]

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            delay: 2.4, duration: .4, ease: 'easeIn'
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map(service => (
                        <div key={service.num} className='flex flex-1 flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center group-hover:-rotate-90'>
                                    <ArrowDownRight className='text-primary text-3xl' />
                                </Link>
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500'>
                                {service.title}
                            </h2>
                            <p className='text-white/60'>
                                {service.description}
                            </p>
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services