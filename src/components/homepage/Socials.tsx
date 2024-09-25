import { Github, Linkedin, Twitter, X } from "lucide-react"
import Link from "next/link"

const socialHandles = [
    { icon: <Github />, path: 'https://github.com/arewageek' },
    { icon: <Twitter />, path: 'https://x.com/arewaofweb3' },
    { icon: <Linkedin />, path: 'https://www.linkedin.com/in/austin-ameh-a2315b165' },
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