"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const HeaderLogo = () => {
    const pathname = usePathname();
    const logoUrl = pathname === "/" ? "/assets/logo.png" : "/assets/logo-dark.png"
    return (
        <Link className="header__logo" href="/" prefetch>
            <Image
                src={logoUrl}
                alt="logo"
                height={48}
                width={138}
            />
        </Link>
    )
}

export default HeaderLogo