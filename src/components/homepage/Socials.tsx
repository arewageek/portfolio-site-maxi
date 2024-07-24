import { Github, Linkedin, Twitter, X } from "lucide-react"
import Link from "next/link"
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa'

const socialHandles = [
    { icon: <FaDiscord />, path: '' },
    { icon: <FaTwitter />, path: 'https://x.com/cudyweb3' },
    { icon: <FaTelegram />, path: 'https://t.me/Cudyweb3' },
]

const Socials = ({ containerStyles, iconStyles }: { iconStyles: string, containerStyles: string }) => {
    return (
        <div className={containerStyles}>
            {socialHandles.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}

export default Socials