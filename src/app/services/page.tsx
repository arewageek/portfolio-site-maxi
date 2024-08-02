"use client"
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
    { num: '01', title: 'Smart Contract Development', description: 'I write secure, high-performance smart contracts for EVM and TON blockchains. My expertise lies in designing, developing, and auditing contracts to ensure reliability and efficiency.', href: '#' },
    { num: '02', title: 'Telegram MiniApps Development', description: 'I create engaging and user-friendly Telegram mini-apps for a diverse range of projects, including DeFi, gaming, airdrops, waitlists, and portfolios. I transform complex ideas into seamless in-app experiences.', href: '#' },
    { num: '03', title: 'Telegram Bots Development', description: ' build high-performance Telegram bots tailored to your specific needs. From trading sniping tools to automated airdrop participation, I deliver efficient and reliable bot solutions.', href: '#' },
    { num: '04', title: 'Web Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab, eligendi esse reprehenderit est voluptas soluta vitae consequatur, iusto ', href: '#' },
    { num: '05', title: 'Web Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab, eligendi esse reprehenderit est voluptas soluta vitae consequatur, iusto ', href: '#' },
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