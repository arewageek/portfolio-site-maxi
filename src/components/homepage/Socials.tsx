import { Github, Linkedin, Twitter, X } from "lucide-react"
import { FaDiscord, FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import Link from "next/link"

const socialHandles = [
    { icon: <Twitter />, path: 'https://x.com/d_onlydiva' },
    { icon: <FaTelegramPlane />, path: 'https://t.me/prettydiva_101' },
    // { icon: <FaDiscord />, path: 'https://github.com/arewageek' },
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