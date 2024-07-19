import { Github, Linkedin, Twitter, X } from "lucide-react"
import Link from "next/link"

const socialHandles = [
    { icon: <Github />, path: '' },
    { icon: <Twitter />, path: '' },
    { icon: <Linkedin />, path: '' },
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